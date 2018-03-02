var questionsList = [{
    q_question: 'באיזו שנה נולד מוחמד?',
    q_answers: [
      '570',
      '680 לפני הספירה',
      '905',
      '850'
    ],
    q_type: 'classic',
    q_category: undefined,
    done: false
  },
  {
    q_question: 'באיזו שנה התגלתה האנטיביוטיקה הראשונה?',
    q_answers: [
      '1928',
      '1948',
      '1911',
      '1961'
    ],
    q_type: 'classic',
    q_category: undefined,
    done: false
  },
  {
    q_question: 'איזה איבר קיים רק אצל בני אדם?',
    q_answers: [
      'הסנטר',
      'העקבים',
      'בלוטות השקד',
      'התוספתן'
    ],
    q_type: 'classic',
    q_category: undefined,
    done: false
  },
  {
    q_question: 'גילית שהכלב שלך אכל פיצה. איזו תוספת רעילה עבורו ותצדיק נסיעה לווטרינר?',
    q_answers: [
      'בצל',
      'זית',
      'אננס',
      'תרד'
    ],
    q_type: 'classic',
    q_category: undefined,
    done: false
  },
  {
    q_question: 'מהו בוקה?',
    q_answers: [
      'ניחוח הנודף מיין',
      'בד משופשף',
      'שמיכת פיקה עבה',
      'סוג של פעילות מינית'
    ],
    q_type: 'classic',
    q_category: undefined,
    done: false
  },
  {
    q_question: 'איזה משפט לא שימש כסיסמת בחירות?',
    q_answers: [
      'בנט - כיפת ברזל לעם ישראל',
      'נתניהו - עושים שלום בטוח',
      'רק ליברמן מבין ערבית',
      'עלה ירוק או עלה לניידת'
    ],
    q_type: 'classic',
    q_category: undefined,
    done: false
  },
  {
    q_question: 'על אבן רוזטה כתוב טקסט בשלושה סוגי כתב שונים: כתב חרטומים, כתב דמוטי ו...?',
    q_answers: [
      'כתב יווני עתיק',
      'כתב לטיני',
      'כתב פרסי עתיק',
      'כתב עברי מקראי'
    ],
    q_type: 'classic',
    q_category: undefined,
    done: false
  },
  {
    q_question: 'כיצד כונתה תורת הלחימה של גרמניה הנאצית?',
    q_answers: [
      'מלחמת בזק',
      'מכת ברזל',
      'פשיטת מחץ',
      'מתקפת צלב'
    ],
    q_type: 'classic',
    q_category: undefined,
    done: false
  },
  {
    q_question: 'מהי המדינה הראשונה שבה ניתנה זכות הצבעה לנשים?',
    q_answers: [
      'ניו זילנד',
      'ארצות הברית',
      'ישראל',
      'שוויץ'
    ],
    q_type: 'classic',
    q_category: undefined,
    done: false
  },
  {
    q_question: 'איזה מהבאים לא קיים בגלגל המזלות הסיני?',
    q_answers: [
      'עיט',
      'טיגריס',
      'שור',
      'ארנבת'
    ],
    q_type: 'classic',
    q_category: undefined,
    done: false
  },
  {
    q_question: 'מה מהבאים אינו ניקוד בג\'ודו?',
    q_answers: [
      'וואקמה',
      'יוקו',
      'ואזארי',
      'איפון'
    ],
    q_type: 'category',
    q_category: "אומנויות לחימה!",
    done: false
  },
  {
    q_question: 'חזרתי בזמן לתל אביב של 1990. איזה בניין יחסר לי בנוף?',
    q_answers: [
      'מגדלי עזריאלי',
      'תחנת הכוח רידינג',
      'מגדל שלום',
      'בניין העירייה'
    ],
    q_type: 'category',
    q_category: "תל אביב",
    done: false
  },
  {
    q_question: 'בתנ"ך, מה לא שימש ככלי הרג?',
    q_answers: [
      'כוס רעל',
      'יתד של אוהל',
      'לחי של חמור',
      'עץ תלייה'
    ],
    q_type: 'category',
    q_category: "בתנך הרגו הרבה",
    done: false
  },
  {
    q_question: 'כמה זה 0 עצרת?',
    q_answers: [
      '1',
      '0',
      '-1/12',
      'לא מוגדר'
    ],
    q_type: 'category',
    q_category: "מתמטיכיף",
    done: false
  },
  {
    q_question: 'איזה מהיסודות הוא מוליך החשמל הטוב ביותר?',
    q_answers: [
      'כסף',
      'זהב',
      'אלומיניום',
      'נחושת'
    ],
    q_type: 'category',
    q_category: "יסודות(לא, לא אווטר)",
    done: false
  },
  {
    q_question: 'איזו מהבאות לא הייתה שיטה לייצור צבע?',
    q_answers: [
      'ייבוש דם פילים ליצירת הצבע "Dragon\'s blood"',
      'טחינת מומיות ליצירת הצבע "Mummy brown"',
      'האכלת פרות בעלי מנגו ואיסוף השתן שלהן ליצירת הצבע "Indian yellow"',
      'הרתחת חלזונות ים ליצירת הצבע "Tyrian purple"'
    ],
    q_type: 'category',
    q_category: "וככה זה לא נוצר",
    done: false
  },
  {
    q_question: 'מה מהבאים לא נחשב "מכונה פשוטה"?',
    q_answers: [
      'בוכנה',
      'גלגלת',
      'בורג',
      'יתד'
    ],
    q_type: 'category',
    q_category: "מכונות",
    done: false
  },
  {
    q_question: 'מי מהבאים לא כיהן כסגן ראש הממשלה?',
    q_answers: [
      'אהוד אולמרט',
      'אביגדור ליברמן',
      'אלי ישי',
      'אהוד ברק'
    ],
    q_type: 'category',
    q_category: "פוליטיקה",
    done: false
  },
  {
    q_question: 'איזה מהבאים הוא לא מועד מקראי?',
    q_answers: [
      'חנוכה',
      'יום הכיפורים',
      'שבועות',
      'ראש השנה'
    ],
    q_type: 'category',
    q_category: "חגים ומועדים",
    done: false
  },
  {
    q_question: 'מי מהבאים הופיע בישראל?',
    q_answers: [
      'ליידי גאגא',
      'גורילז',
      'דאפט פאנק',
      'נירוונה'
    ],
    q_type: 'category',
    q_category: "להקות ואמנים",
    done: false
  },
  {
    q_question: 'מתי נחתם הסכם השלום עם מצרים?',
    q_answers: [
      '1979',
      '1971',
      '1987',
      '1991'
    ],
    q_type: 'category',
    q_category: "שלום שלום",
    done: false
  },
  {
    q_question: 'מהי אורכה של המדוזה הגדולה ביותר בעולם?',
    q_answers: [
      '30 מטר',
      '15 מטר',
      '2 מטר',
      'חצי מטר'
    ],
    q_type: 'category',
    q_category: "אמאאא, נעקצתי",
    done: false
  },
  {
    q_question: 'שטחה של אנגליה הוא?',
    q_answers: [
      '131 אלף קמ"ר"',
      '52 אלף קמ"ר"',
      '541 אלף קמ"ר"',
      '367 אלף קמ"ר"'
    ],
    q_type: 'category',
    q_category: "סימבה, כל האדמה הזו שלך",
    done: false
  },
  {
    q_question: 'למה רוה לא כאן הלילה?',
    q_answers: [
      'בהצגה עם המשפחה ומוסר ד"ש',
      'די נמאס לא מכולכם ומוסר ד"ש',
      'סגר שבת כי הפקיר נשק ומוסר ד"ש',
      'הוא כאן ומחופש לדן'
    ],
    q_type: 'category',
    q_category: "רווה",
    done: false
  },
  {
    q_question: 'מהו מפל המים הגבוה ביותר בעולם?',
    q_answers: [
      'מפלי אנחל בוונצואלה',
      'מפלי הניאגרה',
      'מפלי איגוסו בדרום אמריקה',
      'מפלי ויקטוריה שעל נהר זמבזי'
    ],
    q_type: 'category',
    q_category: "מי בא לראפטינג?",
    done: false
  },
  {
    q_question: "מהו אורך החיים הממוצע של ג'ירף?",
    q_answers: [
      '30 שנה',
      '50 שנה',
      '70 שנה',
      '100 שנה'
    ],
    q_type: 'category',
    q_category: "חיות יבשה",
    done: false
  },
  {
    q_question: 'מתי ברכת החמה נאמרת?',
    q_answers: [
      'אחת ל-28 שנה',
      'כל יום בתפילת שחרית',
      'בתחילת כל עונת קיץ',
      'אין תפילה כזאת'
    ],
    q_type: 'category',
    q_category: "הלו, אלוהים?",
    done: false
  },
  {
    q_question: 'מי הלחין את היצירה "מפצח האגוזים"?',
    q_answers: [
      'צ\'ייקובסקי',
      'בטהובן',
      'ברהמס',
      'פרוקופייב'
    ],
    q_type: 'category',
    q_category: "סול סול-סול-סול לה לה סי סול לה",
    done: false
  },
  {
    q_question: 'מהו "battement"?',
    q_answers: [
      'תרגיל בלט',
      'עיר בריביירה הצרפתית',
      'דמות במחזה "עלובי החיים"',
      'מוטיב ספרותי'
    ],
    q_type: 'category',
    q_category: "Quoi??",
    done: false
  },
  {
    q_question: 'רבים מציוריו של קלוד מונה תיארו?',
    q_answers: [
      'נופים כפריים ועירוניים',
      'רקדניות',
      'חיי איכרים',
      'חיות במנוסה'
    ],
    q_type: 'category',
    q_category: "אומנות או נמות",
    done: false
  },
  {
    q_question: 'לאיזו מדינה יש יותר תושבים?',
    q_answers: [
      'תימן',
      'גואטמלה',
      'שוויץ',
      'נרווגיה'
    ],
    q_type: 'category',
    q_category: "מדינות",
    done: false
  },
  {
    q_question: 'איזה כישוף לוציוס מאלפוי עמד להטיל על הארי פוטר בסרט השני לפני שדובי עצר אותו?',
    q_answers: [
      'אבדה קדברה',
      'קרושיו',
      'אימפריו',
      'סקטומסמפרה'
    ],
    q_type: 'category',
    q_category: "פוטר!",
    done: false
  },
  {
    q_question: 'כמה אחים ואחיות יש במשפחה של {} (כולל)?',
    q_answers: [
      '1',
      '2',
      '3',
      '4+'
    ],
    q_type: 'personal',
    q_category: undefined,
    done: false
  },
  {
    q_question: 'לאן {} יבחר/תבחר לטייל מבין האפשרויות הבאות?',
    q_answers: [
      'מקסיקו',
      'סין',
      'צרפת',
      'בוטסואנה'
    ],
    q_type: 'personal',
    q_category: undefined,
    done: false
  },
  {
    q_question: 'איך {} יעדיף/תעדיף לבלות?',
    q_answers: [
      'טיול בהרים',
      'מסיבה',
      'בינג\' של סדרה אהובה',
      'משחק של charades'
    ],
    q_type: 'personal',
    q_category: undefined,
    done: false
  },
  {
    q_question: 'מה הכי חשוב ל{}?',
    q_answers: [
      'חברים',
      'במשפחה',
      'בריאות',
      'Wi-Fi'
    ],
    q_type: 'personal',
    q_category: undefined,
    done: false
  },
  {
    q_question: 'מה העונה האהובה על {}?',
    q_answers: [
      'קיץ',
      'חורף',
      'סתיו',
      'אביב'
    ],
    q_type: 'personal',
    q_category: undefined,
    done: false
  },
  {
    q_question: 'מה מהבאים הכי סביר ש{} ילמד?',
    q_answers: [
      'קולנוע',
      'פסיכולוגיה',
      'כלכלה',
      'אמנות'
    ],
    q_type: 'personal',
    q_category: undefined,
    done: false
  },
  {
    q_question: 'מתי בפעם האחרונה {} קרא ספר?',
    q_answers: [
      'ב-24 השעות האחרונות',
      'בשבוע האחרון',
      'בחודש האחרון',
      'ספר? מה זה ספר?'
    ],
    q_type: 'personal',
    q_category: undefined,
    done: false
  },
  {
    q_question: 'עם איזה מפורסם {} הכי היה רוצה להיפגש?',
    q_answers: [
      'אלון מאסק',
      'ג\'יי קיי רולינג',
      'ביבי',
      'ריהאנה'
    ],
    q_type: 'personal',
    q_category: undefined,
    done: false
  },
  {
    q_question: 'מה {} היה לוקח איתו לאי בודד?',
    q_answers: [
      'ספר',
      'מצ\'טה',
      'סיר',
      'סקייטבורד'
    ],
    q_type: 'personal',
    q_category: undefined,
    done: false
  },
  {
    q_question: 'קבעת להיפגש עם {}. אפשר לצפות להגעתו/ה...',
    q_answers: [
      'בזמן',
      'באיחור של 10 דקות',
      'באיחור של חצי שעה',
      'לא'
    ],
    q_type: 'personal',
    q_category: undefined,
    done: false
  },
  {
    q_question: 'איזה כוח על {} היה בוחר?',
    q_answers: [
      'לעוף',
      'לדבר עם בעלי חיים',
      'מהירות על',
      'להיות בלתי נראה'
    ],
    q_type: 'personal',
    q_category: undefined,
    done: false
  },
  {
    q_question: '{} התאהב/ה. מה יהיה הצעד הבא שלו/שלה?',
    q_answers: [
      'לומר את זה למושא האהבה',
      'לומר את זה לחבר שיגיד את זה למושא האהבה',
      'לעקוב אחרי מושא האהבה ברשתות חברתיות ולא לעשות כלום',
      'לרקום מזימה שבה הוא/היא נדרס/ת, ואז מושא האהבה מציל את היום והם מתאהבים'
    ],
    q_type: 'personal',
    q_category: undefined,
    done: false
  },
  {
    q_question: 'מה {} יפרסם ברשתות חברתיות?',
    q_answers: [
      'תמונות שלו/שלה',
      'תמונות של כל דבר חוץ ממנו/ממנה',
      'ממים',
      'כלום'
    ],
    q_type: 'personal',
    q_category: undefined,
    done: false
  },
  {
    q_question: 'עם מי {} מסתדר הכי טוב במשפחה שלו/שלה?',
    q_answers: [
      'אמא',
      'אבא',
      'אח (אם יש)',
      'אחות (אם יש)'
    ],
    q_type: 'personal',
    q_category: undefined,
    done: false
  },
  {
    q_question: 'אם החיים היו מחזה, {} היה...?',
    q_answers: [
      'הדמות הראשית',
      'דמות משנה',
      'במקהלה',
      'בקהל'
    ],
    q_type: 'personal',
    q_category: undefined,
    done: false
  },
  {
    q_question: 'כמה ילדים יהיו ל{}...?',
    q_answers: [
      'לא',
      '1-2',
      '3-4',
      '5+'
    ],
    q_type: 'personal',
    q_category: undefined,
    done: false
  },
  {
    q_question: 'לאיזה סוג סרט {} רוצה ללכת עכשיו?',
    q_answers: [
      'קומדיה רומנטית',
      'גיבורי על',
      'דוקומנטרי',
      'אימה'
    ],
    q_type: 'personal',
    q_category: undefined,
    done: false
  },
  {
    q_question: 'אם {} היה בממשלה, הוא היה מגדיל את תקציב...',
    q_answers: [
      'החינוך',
      'הרווחה',
      'השיכון',
      'הגנת הסביבה'
    ],
    q_type: 'personal',
    q_category: undefined,
    done: false
  },
  {
    q_question: '{} השתחרר וקיבל מענק שחרור. הוא ישתמש בכסף בשביל...',
    q_answers: [
      'לקנות רכב',
      'לשכור דירה',
      'לממן טיול לחו"ל"',
      'לא ישתמש אלא יחסוך'
    ],
    q_type: 'personal',
    q_category: undefined,
    done: false
  },
  {
    q_question: 'אצטרולב הוא כלי עבודה',
    q_answers: [
      'לא נכון',
      'נכון'
    ],
    q_type: 'tf',
    q_category: undefined,
    done: false
  },
  {
    q_question: 'מיקי ברקוביץ\' היה שחקן...?',
    q_answers: [
      'כדורסל',
      'כדורגל'
    ],
    q_type: 'tf',
    q_category: undefined,
    done: false
  },
  {
    q_question: 'באיזו שפה נכתב במקור "הברווזון המכוער"?',
    q_answers: [
      'דנית',
      'גרמנית'
    ],
    q_type: 'tf',
    q_category: undefined,
    done: false
  },
  {
    q_question: 'אם תשפוך מלח אל תוך כוס מים, גובה המים ירד במקום לעלות',
    q_answers: [
      'נכון',
      'לא נכון'
    ],
    q_type: 'tf',
    q_category: undefined,
    done: false
  },
  {
    q_question: 'תינוקות שהרגע נולדו לא יכולים לרעוד מקור',
    q_answers: [
      'נכון',
      'לא נכון'
    ],
    q_type: 'tf',
    q_category: undefined,
    done: false
  },
  {
    q_question: 'מה מהבאים אינו דבר אמיתי שיכול לקרות?',
    q_answers: [
      'אכילת יתר של לובסטרים תצבע את עורך בוורוד',
      'אכילת יתר של גזר תצבע את עורך בכתום',
      'אכילת יתר של חלזונות תצבע את עורך בצהוב',
      'אכילת יתר של כסף תצבע את עורך בכסף'
    ],
    q_type: 'finals',
    q_category: undefined,
    done: false
  },
  {
    q_question: 'איזו מדינה לחמה לצד מדינות הציר במלחמת העולם השנייה?',
    q_answers: [
      'פינלנד',
      'הרפובליקה הסינית',
      'אוסטרליה',
      'ניו זילנד'
    ],
    q_type: 'finals',
    q_category: undefined,
    done: false
  },
  {
    q_question: 'אם דיונון לא יפרק את האוכל שלו לפני שיבלע אותו, הוא יכול לגרום לעצמו נזק. למה?',
    q_answers: [
      'הוושט שלו יתרחב, מה שיגרום לנזק מוחי',
      'הוושט שלו יתרחב ויחסום את הזימים שלו מבפנים',
      'לאנזימים בקיבה שלו יקח יותר מדי זמן לפרק את המזון והוא יגווע ברעב',
      'הקיבה שלו תתרחב ותפעיל לחץ על נוירונים קרובים'
    ],
    q_type: 'finals',
    q_category: undefined,
    done: false
  },
  {
    q_question: 'באיזה מהבאים לא משתמשים ליצירת מספרים אקראיים?',
    q_answers: [
      'גלים בים',
      'מנורות לבה',
      'דעיכה רדיואקטיבית',
      'רעש אטמוספרי'
    ],
    q_type: 'finals',
    q_category: undefined,
    done: false
  },
  {
    q_question: 'מה נותן ליהלום כחול את הצבע שלו?',
    q_answers: [
      'חלק מאטומי הפחמן שלו הוחלפו באטומי בורון',
      'יש יותר חנקן מהרגיל בסביבה כשהיהלום נוצר',
      'ספיגת קרינה מהאדמה',
      'תקופות קור קצרות במהלך היווצרותו ששינו את המבנה שלו'
    ],
    q_type: 'finals',
    q_category: undefined,
    done: false
  },
  {
    q_question: 'מה יונים, לעומת רוב שאר הציפורים, יכולות לעשות?',
    q_answers: [
      'למצוץ מים ולבלוע אותם',
      'להימנע מנזק מקרינה קוסמית',
      'לשרוד בלי מים למשך חודשים',
      'להוציא את הצואה שלהן בכוח רב'
    ],
    q_type: 'finals',
    q_category: undefined,
    done: false
  },
  {
    q_question: 'איזו מהמדינות הבאות משתמשת בשיטה המטרית?',
    q_answers: [
      'בורקינה פאסו',
      'מיאנמר',
      'ארצות הברית',
      'ליבריה'
    ],
    q_type: 'finals',
    q_category: undefined,
    done: false
  },
  {
    q_question: 'ב-1997 התרחש ניסיון ההתנקשות הכושל של המוסד ב...?',
    q_answers: [
      'ח\'אלד משעל',
      'מוסא אבו מרזוק',
      'אחמד יאסין',
      'מוחמד דף'
    ],
    q_type: 'finals',
    q_category: undefined,
    done: false
  },
  {
    q_question: 'איפה סביר שתיתקל במונחים "דה קאפו", "ויואצ\'ה" ו"פרסטו"?',
    q_answers: [
      'בספר תווים של יצירה מוזיקלית',
      'בספר בישול',
      'ברשימה של אתלטים איטלקיים מפורסמים',
      'בספר על ציירים איטלקיים'
    ],
    q_type: 'finals',
    q_category: undefined,
    done: false
  },
  {
    q_question: 'על אף שהיא יכולה להתרחב, בממוצע, הקיבה שלך היא בערך באותו הגודל כמו...?',
    q_answers: [
      'האגרוף שלך',
      'הראש שלך',
      'העין שלך',
      'האוזן שלך'
    ],
    q_type: 'finals',
    q_category: undefined,
    done: false
  },
];