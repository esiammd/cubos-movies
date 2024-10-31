function mapLanguageToPortuguese(language: string): string {
  const languageMap: Record<string, string> = {
    English: 'Inglês',
    Bislama: 'Bislama',
    Czech: 'Checo',
    Bashkir: 'Baxkir',
    Avestan: 'Avéstico',
    Avaric: 'Avar',
    German: 'Alemão',
    Maltese: 'Maltês',
    Oromo: 'Oromo',
    'Raeto-Romance': 'Reto-romano',
    Somali: 'Somali',
    Tsonga: 'Tsonga',
    Vietnamese: 'Vietnamita',
    Guarani: 'Guarani',
    Igbo: 'Igbo',
    Italian: 'Italiano',
    Kikuyu: 'Kikuyu',
    Kurdish: 'Curdo',
    Latin: 'Latim',
    Lingala: 'Lingala',
    Letzeburgesch: 'Luxemburguês',
    'Chichewa; Nyanja': 'Chichewa; Nianja',
    Polish: 'Polonês',
    Sinhalese: 'Cingalês',
    Tonga: 'Tonga',
    Azerbaijani: 'Azeri',
    Chechen: 'Checheno',
    Slavic: 'Eslavo',
    Danish: 'Dinamarquês',
  };

  return languageMap[language] || language;
}

export default mapLanguageToPortuguese;
