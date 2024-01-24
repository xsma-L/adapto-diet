const jwt = require("jsonwebtoken")
const axios = require("axios")

exports.createDietProfile = async (req, res) => {
    const { formId, responseId } = req.body

    try {
        const getFormResult = await axios.get(`https://api.typeform.com/forms/${formId}/responses?included_response_ids=${responseId}`, {
            headers: { "Authorization": `Bearer ${process.env.TYPEFORM_TOKEN}`}
        })

        console.log(getFormResult.data)

        res.status(200).send(getFormResult.data.items[0].answers)
    } catch (error) {
        console.log('error =>', error)
        res.status(500).json({ message: "error" })
    }
}