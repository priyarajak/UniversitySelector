const universitiesParser = (data, type) => {
    if (type) {
        const obj = {}
        data.map((uni) => {
            const university = universityParser(uni)
            obj[university[type]] = obj[university[type]] ? obj[university[type]] : []
            obj[university[type]].push(university)
        })
        return obj
    }
    return data.map((uni) => universityParser(uni))
}

const universityParser = (university) => {
    const { alpha_two_code, country, name, web_pages } = university || {}

    return {
        universityName: name,
        countryCode: alpha_two_code,
        url: web_pages && web_pages[0],
        country,
        action : {
            label : 'Add to Bucket'
        }
    }
}

export default universitiesParser;
