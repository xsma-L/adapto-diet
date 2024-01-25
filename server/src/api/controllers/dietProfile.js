const axios = require("axios")
const { PrismaClient } = require('@prisma/client')

exports.createDietProfile = async (req, res) => {
    const { formId, responseId } = req.body
    const { userId } = res.locals.user
    
    try {
        const token = req.headers.authorization


        const getFormResult = await axios.get(`https://api.typeform.com/forms/${formId}/responses?included_response_ids=${responseId}`, {
            headers: { "Authorization": `Bearer ${process.env.TYPEFORM_TOKEN}`}
        })

        const form = getFormResult.data.items[0].answers
        const informationsData = await sortFormData(form)
        informationsData["userId"] = userId

        const prisma = new PrismaClient();
        const newInformations = await prisma.informations.create({
            data: informationsData,
        })

        res.status(200).send("infos saved")
    } catch (error) {
        console.log('error =>', error)
        res.status(500).json({ message: "error" })
    }
}

const sortFormData = (data) => {
    const fields = [
        "exercices_reguliers",
        "nature_activites",
        "frequence_activites",
        "duree_activites",
        "habitudes_alimentaires_particulieres",
        "aliments_evites",
        "allergies_intolerances",
        "aliments_preferes",
        "pourcentage_graisse_corporelle",
        "conditions_medicales",
        "repas_par_jour",
        "preferences_temps_repas",
        "objectifs_nutritionnels",
        "autres_considerations",
    ]

    const newData = {}

    data.forEach(item => {
        const field = item.field
        const key = field.ref
        const type = field.type
        const questionKey = `question_${key}`
    
        const value = type === "multiple_choice" ? item.choice.label : item[Object.keys(item).pop()]
        const newKey = key.replace("question_", "")
        newData[newKey] = !value ? "aucun" : value === true ? "oui" : value
    })
    
    for(let i = 0; i <= fields.length; i++){
        const element = fields[i]
        newData[element] === undefined ? newData[element] = "aucun" : "" 
    }

    const asArray = Object.entries(newData)
    const filtered = asArray.filter(([key, value]) => key !== "undefined")
    const formValues = Object.fromEntries(filtered)

    return formValues
}