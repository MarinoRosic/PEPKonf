// Copy for the press release in EmbargoSection.
//
// Plain strings are normal text. Objects are blacked-out fields:
//   value      null while under embargo. Fill it in and the bar comes off, e.g.
//              { value: 'Odgovorno komuniciranje', mask: [12, 14] }
//   mask       bar widths in characters, one bar per word. These are made up on purpose,
//              so the bars don't give away how long the real answer is.
//   permanent  this bar stays forever (it's part of the joke) and isn't counted as progress.
//
// When every non-permanent field has a value, the stamp changes to "Embargo skinut".

export const embargoRelease = {
  meta: ['Embargo do: ', { value: null, mask: [2, 2] }, ' 2027.'],
  headline: 'PEP se vraća.\nViše ne smijemo reći.',
  paragraphs: [
    [
      'DUBROVNIK – Peto izdanje PEP konferencije održat će se ',
      { value: null, mask: [9, 8] },
      ' 2027. na Sveučilišnom kampusu.',
    ],
    [
      'Glavna tema bit će ',
      { value: null, mask: [12, 14] },
      ', a na pozornicu dolaze ',
      { value: null, mask: [6, 8] },
      ', ',
      { value: null, mask: [7, 6] },
      ' i još ',
      { value: null, mask: [2] },
      ' PRedavača iz svijeta odnosa s javnošću i novinarstva.',
    ],
    [
      '„Znamo što dolazi i jedva čekamo reći, ali ne smijemo“, poručuje ',
      { value: null, mask: [6, 8], permanent: true },
      ' iz organizacijskog tima.',
    ],
  ],
  editorsNote: 'Bilješka za urednike: molimo vas da ne klikate po zacrnjenim poljima.',
};

// What a bar says when someone clicks it anyway. Shown in this order, then loops.
export const embargoReplies = [
  'Bez komentara.',
  'Neće moći.',
  'Ne možemo ni potvrditi ni demantirati.',
  'Glasnogovornik je na godišnjem.',
  'Izvor želi ostati anoniman.',
  'Off the record: ne.',
  'Rekli smo vam da ne klikate.',
  'Javite se nakon embarga.',
];
