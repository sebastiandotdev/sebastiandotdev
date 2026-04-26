const locales = [
  {
    code: 'en',
    file: 'en.json',
    name: 'English',
  },
  {
    code: 'es',
    file: 'es.json',
    name: 'Español',
  },
  /*
  {
    code: 'pt',
    file: 'pt.json',
    name: 'Português',
  },
  {
    code: 'fr-FR',
    file: 'fr-FR.json',
    name: 'Français',
  }, */
]

function buildLocales() {
  const mapperLocales = locales.map((data) => {
    return {
      ...data,
      files: [data.file],
    }
  })

  return mapperLocales.sort((a, b) => a.name.localeCompare(b.name))
}

export const currentLocales = buildLocales()
