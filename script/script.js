
new Vue({
    el: "#app",
    data: {
        list1: [ { id: 'Запоріжжя', Title: 'Запоріжжя' }, { id: 'Запорізький район', Title: 'Запорізький район' }  ],
      list2: [  
                { id: 'Вознесенівський', idForeign: 'Запоріжжя', Title: 'Вознесенівський' }, 
                { id: 'Дніпровський', idForeign: 'Запоріжжя', Title: 'Дніпровський' }, 
                { id: 'Заводський', idForeign: 'Запоріжжя', Title: 'Заводський' }, 
                { id: 'Комунарський', idForeign: 'Запоріжжя', Title: 'Комунарський' }, 
                { id: 'Олександрівський', idForeign: 'Запоріжжя', Title: 'Олександрівський' }, 
                { id: 'Хортицький', idForeign: 'Запоріжжя', Title: 'Хортицький' }, 
                
                { id: 'м. Вільнянськ', idForeign: 'Запорізький район', Title: 'м. Вільнянськ' },
                { id: 'с. Августинівка', idForeign: 'Запорізький район', Title: 'с. Августинівка' },
                { id: 'с. Агрофенівка ', idForeign: 'Запорізький район', Title: 'с. Агрофенівка ' },
                { id: 'с. Акимове', idForeign: 'Запорізький район', Title: 'с. Акимове' },
                { id: 'с. Андріївка', idForeign: 'Запорізький район', Title: 'с. Андріївка' },
                { id: 'с. Антонівка', idForeign: 'Запорізький район', Title: 'с. Антонівка' },
                { id: 'с. Бабурка', idForeign: 'Запорізький район', Title: 'с. Бабурка' },
                { id: 'с. Беккереве', idForeign: 'Запорізький район', Title: 'с. Беккереве' },
                { id: 'с. Берестове', idForeign: 'Запорізький район', Title: 'с. Берестове' },
                { id: 'с. Біленьке', idForeign: 'Запорізький район', Title: 'с. Біленьке' },
                { id: 'с. Біляївка', idForeign: 'Запорізький район', Title: 'с. Біляївка' },
                { id: 'с. Благодатне', idForeign: 'Запорізький район', Title: 'с. Благодатне' },
                { id: 'с. Богатиреве', idForeign: 'Запорізький район', Title: 'с. Богатиреве' },
                { id: 'с. Богданівка', idForeign: 'Запорізький район', Title: 'с. Богданівка' },
                { id: 'с. Богунівка', idForeign: 'Запорізький район', Title: 'с. Богунівка' },
                { id: 'с. Бойковe', idForeign: 'Запорізький район', Title: 'с. Бойковe' },
                { id: 'с. В-Курьянове', idForeign: 'Запорізький район', Title: 'с. В-Курьянове' },
                { id: 'с. Василівка', idForeign: 'Запорізький район', Title: 'с. Василівка' },
                { id: 'с. Василівське ', idForeign: 'Запорізький район', Title: 'с. Василівське ' },
                { id: 'с. Василькове', idForeign: 'Запорізький район', Title: 'с. Василькове' },
                { id: 'с. Веселе', idForeign: 'Запорізький район', Title: 'с. Веселе' },
                { id: 'с. Веселий Гай', idForeign: 'Запорізький район', Title: 'с. Веселий Гай' },
                { id: 'с. Веселянка ', idForeign: 'Запорізький район', Title: 'с. Веселянка ' },
                { id: 'с. Вишневе', idForeign: 'Запорізький район', Title: 'с. Вишневе' },
                { id: 'с. Вікторівка', idForeign: 'Запорізький район', Title: 'с. Вікторівка' },
                { id: 'с. Вільне', idForeign: 'Запорізький район', Title: 'с. Вільне' },
                { id: 'с. Водяне', idForeign: 'Запорізький район', Title: 'с. Водяне' },
                { id: 'с. Вознесенівка ', idForeign: 'Запорізький район', Title: 'с. Вознесенівка ' },
                { id: 'с. Володимирівка', idForeign: 'Запорізький район', Title: 'с. Володимирівка' },
                { id: 'с. Володимирівське', idForeign: 'Запорізький район', Title: 'с. Володимирівське' },
                { id: 'с. Гасанівка:', idForeign: 'Запорізький район', Title: 'с. Гасанівка:' },
                { id: 'с. Герасівка', idForeign: 'Запорізький район', Title: 'с. Герасівка' },
                { id: 'с. Гнаровське', idForeign: 'Запорізький район', Title: 'с. Гнаровське' },
                { id: 'с. Голубкове', idForeign: 'Запорізький район', Title: 'с. Голубкове' },
                { id: 'с. Горлицьке  ', idForeign: 'Запорізький район', Title: 'с. Горлицьке  ' },
                { id: 'с. Граничне', idForeign: 'Запорізький район', Title: 'с. Граничне' },
                { id: 'с. Григорівка', idForeign: 'Запорізький район', Title: 'с. Григорівка' },
                { id: 'с. Грізне', idForeign: 'Запорізький район', Title: 'с. Грізне' },
                { id: 'с. Дерезівка', idForeign: 'Запорізький район', Title: 'с. Дерезівка' },
                { id: 'с. Дніпрельстан', idForeign: 'Запорізький район', Title: 'с. Дніпрельстан' },
                { id: 'с. Дніпрові Хвилі ', idForeign: 'Запорізький район', Title: 'с. Дніпрові Хвилі ' },
                { id: 'с. Долинівка', idForeign: 'Запорізький район', Title: 'с. Долинівка' },
                { id: 'с. Дружелюбівка', idForeign: 'Запорізький район', Title: 'с. Дружелюбівка' },
                { id: 'с. Дубовий Гай ', idForeign: 'Запорізький район', Title: 'с. Дубовий Гай ' },
                { id: 'с. Дуднікове', idForeign: 'Запорізький район', Title: 'с. Дуднікове' },
                { id: 'с. Зелене', idForeign: 'Запорізький район', Title: 'с. Зелене' },
                { id: 'с. Зелене ', idForeign: 'Запорізький район', Title: 'с. Зелене ' },
                { id: 'с. Зелений Гай:', idForeign: 'Запорізький район', Title: 'с. Зелений Гай:' },
                { id: 'с. Зеленопілля ', idForeign: 'Запорізький район', Title: 'с. Зеленопілля ' },
                { id: 'с. Значкове', idForeign: 'Запорізький район', Title: 'с. Значкове' },
                { id: 'с. Зорівка', idForeign: 'Запорізький район', Title: 'с. Зорівка' },
                { id: 'с. Зоряне', idForeign: 'Запорізький район', Title: 'с. Зоряне' },
                { id: 'с. Івангород', idForeign: 'Запорізький район', Title: 'с. Івангород' },
                { id: 'с. Іванівське', idForeign: 'Запорізький район', Title: 'с. Іванівське' },
                { id: 'с. Івано-Ганівка ', idForeign: 'Запорізький район', Title: 'с. Івано-Ганівка ' },
                { id: `с. Кам'яне`, idForeign: 'Запорізький район', Title: `с. Кам'яне` },
                { id: 'с. Кам’янка', idForeign: 'Запорізький район', Title: 'с. Кам’янка' },
                { id: 'с. Каменувате', idForeign: 'Запорізький район', Title: 'с. Каменувате' },
                { id: 'с. Канівське', idForeign: 'Запорізький район', Title: 'с. Канівське' },
                { id: 'с. Кас’янівка', idForeign: 'Запорізький район', Title: 'с. Кас’янівка' },
                { id: 'с. Каштанівка', idForeign: 'Запорізький район', Title: 'с. Каштанівка' },
                { id: 'с. Київське', idForeign: 'Запорізький район', Title: 'с. Київське' },
                { id: 'с. Козаківське', idForeign: 'Запорізький район', Title: 'с. Козаківське' },
                { id: 'с. Козаче', idForeign: 'Запорізький район', Title: 'с. Козаче' },
                { id: 'с. Колос', idForeign: 'Запорізький район', Title: 'с. Колос' },
                { id: 'с. Комунарівка (Дніпропетровської області)', idForeign: 'Запорізький район', Title: 'с. Комунарівка (Дніпропетровської області)' },
                { id: 'с. Крилівське', idForeign: 'Запорізький район', Title: 'с. Крилівське' },
                { id: 'с. Криничне', idForeign: 'Запорізький район', Title: 'с. Криничне' },
                { id: 'с. Крутий Яр', idForeign: 'Запорізький район', Title: 'с. Крутий Яр' },
                { id: 'с. Купріяновка', idForeign: 'Запорізький район', Title: 'с. Купріяновка' },
                { id: 'с. Кушугум', idForeign: 'Запорізький район', Title: 'с. Кушугум' },
                { id: 'с. Лежине', idForeign: 'Запорізький район', Title: 'с. Лежине' },
                { id: 'с. Лемешинське', idForeign: 'Запорізький район', Title: 'с. Лемешинське' },
                { id: 'с. Лисогірка', idForeign: 'Запорізький район', Title: 'с. Лисогірка' },
                { id: 'с. Лукашеве ', idForeign: 'Запорізький район', Title: 'с. Лукашеве ' },
                { id: 'с. Любимівка', idForeign: 'Запорізький район', Title: 'с. Любимівка' },
                { id: 'с. Любомирівка ', idForeign: 'Запорізький район', Title: 'с. Любомирівка ' },
                { id: 'с. Люцерна', idForeign: 'Запорізький район', Title: 'с. Люцерна' },
                { id: 'с. Максимівка', idForeign: 'Запорізький район', Title: 'с. Максимівка' },
                { id: 'с. Малашівка ', idForeign: 'Запорізький район', Title: 'с. Малашівка ' },
                { id: 'с. Малокатеринівка ', idForeign: 'Запорізький район', Title: 'с. Малокатеринівка ' },
                { id: `с. Мар'ївка`, idForeign: 'Запорізький район', Title: `с. Мар'ївка` },
                { id: `с. Мар'янівка`, idForeign: 'Запорізький район', Title: `с. Мар'янівка` },
                { id: 'с. Матвіївка', idForeign: 'Запорізький район', Title: 'с. Матвіївка' },
                { id: 'с. Миколаївка-2', idForeign: 'Запорізький район', Title: 'с. Миколаївка-2' },
                { id: 'с. Миколай Поле', idForeign: 'Запорізький район', Title: 'с. Миколай Поле' },
                { id: 'с. Михайлівське', idForeign: 'Запорізький район', Title: 'с. Михайлівське' },
                { id: 'с. Морозівка', idForeign: 'Запорізький район', Title: 'с. Морозівка' },
                { id: 'с. Московка', idForeign: 'Запорізький район', Title: 'с. Московка' },
                { id: 'с. Московка ', idForeign: 'Запорізький район', Title: 'с. Московка ' },
                { id: 'с. Нагірне;', idForeign: 'Запорізький район', Title: 'с. Нагірне;' },
                { id: 'с. Надія', idForeign: 'Запорізький район', Title: 'с. Надія' },
                { id: 'с. Наталівка', idForeign: 'Запорізький район', Title: 'с. Наталівка' },
                { id: 'с. Нижня Хортиця ', idForeign: 'Запорізький район', Title: 'с. Нижня Хортиця ' },
                { id: 'с. Нове Поле', idForeign: 'Запорізький район', Title: 'с. Нове Поле' },
                { id: 'с. Нововасилівка', idForeign: 'Запорізький район', Title: 'с. Нововасилівка' },
                { id: 'с. Нововікторівка', idForeign: 'Запорізький район', Title: 'с. Нововікторівка' },
                { id: 'с. Нововознесенка ', idForeign: 'Запорізький район', Title: 'с. Нововознесенка ' },
                { id: 'с. Нововолодимирівка', idForeign: 'Запорізький район', Title: 'с. Нововолодимирівка' },
                { id: 'с. Новогригорівка', idForeign: 'Запорізький район', Title: 'с. Новогригорівка' },
                { id: 'с. Новогупалівка', idForeign: 'Запорізький район', Title: 'с. Новогупалівка' },
                { id: 'с. Новогупалівка: ', idForeign: 'Запорізький район', Title: 'с. Новогупалівка: ' },
                { id: 'с. Новодніпровка ', idForeign: 'Запорізький район', Title: 'с. Новодніпровка ' },
                { id: 'с. Новоіванівка', idForeign: 'Запорізький район', Title: 'с. Новоіванівка' },
                { id: 'с. Новоіванківка', idForeign: 'Запорізький район', Title: 'с. Новоіванківка' },
                { id: 'с. Новомиргородівка', idForeign: 'Запорізький район', Title: 'с. Новомиргородівка' },
                { id: 'с. Новоолександрівка ', idForeign: 'Запорізький район', Title: 'с. Новоолександрівка ' },
                { id: 'с. Новооленівка', idForeign: 'Запорізький район', Title: 'с. Новооленівка' },
                { id: 'с. Новопетрівка ', idForeign: 'Запорізький район', Title: 'с. Новопетрівка ' },
                { id: 'с. Новоселище ', idForeign: 'Запорізький район', Title: 'с. Новоселище ' },
                { id: 'с. Новоселівка', idForeign: 'Запорізький район', Title: 'с. Новоселівка' },
                { id: 'с. Новосергїївка ', idForeign: 'Запорізький район', Title: 'с. Новосергїївка ' },
                { id: 'с. Новосолоне', idForeign: 'Запорізький район', Title: 'с. Новосолоне' },
                { id: 'с. Новософіївка', idForeign: 'Запорізький район', Title: 'с. Новософіївка' },
                { id: 'с. Новостепнянське ', idForeign: 'Запорізький район', Title: 'с. Новостепнянське ' },
                { id: 'с. Новотроїцьке', idForeign: 'Запорізький район', Title: 'с. Новотроїцьке' },
                { id: 'с. Новоукраїнка', idForeign: 'Запорізький район', Title: 'с. Новоукраїнка' },
                { id: 'с. Новоукраїнка ', idForeign: 'Запорізький район', Title: 'с. Новоукраїнка ' },
                { id: 'с. Новофедорівка', idForeign: 'Запорізький район', Title: 'с. Новофедорівка' },
                { id: 'с. Овчарне ', idForeign: 'Запорізький район', Title: 'с. Овчарне ' },
                { id: 'с. Олексіївка', idForeign: 'Запорізький район', Title: 'с. Олексіївка' },
                { id: 'с. Павлівка', idForeign: 'Запорізький район', Title: 'с. Павлівка' },
                { id: 'с. Первозванівка ', idForeign: 'Запорізький район', Title: 'с. Первозванівка ' },
                { id: 'с. Петрівське', idForeign: 'Запорізький район', Title: 'с. Петрівське' },
                { id: 'с. Петрівське:', idForeign: 'Запорізький район', Title: 'с. Петрівське:' },
                { id: 'с. Петропавлівк', idForeign: 'Запорізький район', Title: 'с. Петропавлівк' },
                { id: 'с. Петропавлівка', idForeign: 'Запорізький район', Title: 'с. Петропавлівка' },
                { id: 'с. Петропавлівка ', idForeign: 'Запорізький район', Title: 'с. Петропавлівка ' },
                { id: 'с. Петропіль', idForeign: 'Запорізький район', Title: 'с. Петропіль' },
                { id: 'с. Підгірне', idForeign: 'Запорізький район', Title: 'с. Підгірне' },
                { id: 'с. Поди', idForeign: 'Запорізький район', Title: 'с. Поди' },
                { id: 'с. Привільне', idForeign: 'Запорізький район', Title: 'с. Привільне' },
                { id: 'с. Привітне', idForeign: 'Запорізький район', Title: 'с. Привітне' },
                { id: 'с. Придолинівка ', idForeign: 'Запорізький район', Title: 'с. Придолинівка ' },
                { id: 'с. Рибальське,', idForeign: 'Запорізький район', Title: 'с. Рибальське,' },
                { id: 'с. Річне', idForeign: 'Запорізький район', Title: 'с. Річне' },
                { id: 'с. Родинське', idForeign: 'Запорізький район', Title: 'с. Родинське' },
                { id: 'с. Роздолля', idForeign: 'Запорізький район', Title: 'с. Роздолля' },
                { id: 'с. Розумівка', idForeign: 'Запорізький район', Title: 'с. Розумівка' },
                { id: 'с. Ручаївка', idForeign: 'Запорізький район', Title: 'с. Ручаївка' },
                { id: 'с. Самійлівка', idForeign: 'Запорізький район', Title: 'с. Самійлівка' },
                { id: 'с. Світанок', idForeign: 'Запорізький район', Title: 'с. Світанок' },
                { id: 'с. Світла Долина', idForeign: 'Запорізький район', Title: 'с. Світла Долина' },
                { id: 'с. Семенівське', idForeign: 'Запорізький район', Title: 'с. Семенівське' },
                { id: 'с. Смоляне', idForeign: 'Запорізький район', Title: 'с. Смоляне' },
                { id: 'с. Солоне', idForeign: 'Запорізький район', Title: 'с. Солоне' },
                { id: 'с. Сорочино', idForeign: 'Запорізький район', Title: 'с. Сорочино' },
                { id: 'с. Софіївка: ', idForeign: 'Запорізький район', Title: 'с. Софіївка: ' },
                { id: 'с. Спасівка:', idForeign: 'Запорізький район', Title: 'с. Спасівка:' },
                { id: 'с. Степове', idForeign: 'Запорізький район', Title: 'с. Степове' },
                { id: 'с. Сторчове', idForeign: 'Запорізький район', Title: 'с. Сторчове' },
                { id: 'с. Тернівка', idForeign: 'Запорізький район', Title: 'с. Тернівка' },
                { id: 'с. Терсянка', idForeign: 'Запорізький район', Title: 'с. Терсянка' },
                { id: 'с. Трудове', idForeign: 'Запорізький район', Title: 'с. Трудове' },
                { id: 'с. Трудолюбівк', idForeign: 'Запорізький район', Title: 'с. Трудолюбівк' },
                { id: 'с. Уділенське ', idForeign: 'Запорізький район', Title: 'с. Уділенське ' },
                { id: 'с. Українка', idForeign: 'Запорізький район', Title: 'с. Українка' },
                { id: 'с. Федорівка ', idForeign: 'Запорізький район', Title: 'с. Федорівка ' },
                { id: 'с. Червоний Яр', idForeign: 'Запорізький район', Title: 'с. Червоний Яр' },
                { id: 'с. Червоні Козаки', idForeign: 'Запорізький район', Title: 'с. Червоні Козаки' },
                { id: 'с. Червонодніпровка ', idForeign: 'Запорізький район', Title: 'с. Червонодніпровка ' },
                { id: 'с. Черепівське ', idForeign: 'Запорізький район', Title: 'с. Черепівське ' },
                { id: 'с. Шевченки', idForeign: 'Запорізький район', Title: 'с. Шевченки' },
                { id: 'с. Шевченкове', idForeign: 'Запорізький район', Title: 'с. Шевченкове' },
                { id: 'с. Шевченково', idForeign: 'Запорізький район', Title: 'с. Шевченково' },
                { id: 'с. Широке', idForeign: 'Запорізький район', Title: 'с. Широке' },
                { id: `с. Юр'ївка`, idForeign: 'Запорізький район', Title: `с. Юр'ївка` },
                { id: 'с. Яворницьке', idForeign: 'Запорізький район', Title: 'с. Яворницьке' },
                { id: 'с. Якимівка', idForeign: 'Запорізький район', Title: 'с. Якимівка' },
                { id: 'с. Яківлеве:', idForeign: 'Запорізький район', Title: 'с. Яківлеве' },
                { id: 'сел. Сонячне', idForeign: 'Запорізький район', Title: 'сел. Сонячне' },
                { id: 'смт. Балабине ', idForeign: 'Запорізький район', Title: 'смт. Балабине ' },
                { id: 'смт. Новомиколаївка', idForeign: 'Запорізький район', Title: 'смт. Новомиколаївка' },
                { id: 'смт. Славгород ', idForeign: 'Запорізький район', Title: 'смт. Славгород ' },
                { id: 'смт. Тернувате', idForeign: 'Запорізький район', Title: 'смт. Тернувате' }


              ],
      selected: {
        list1: 3,
        list2: 1,
      },
    },
    computed: {
      list2Select() {
        return this.list2.filter( option => option.idForeign == this.selected.list1 )
      }
    },
  })



  var notActive = function() {
    var activeStreetInRegion = document.getElementById("regions").value.length !=0;
    document.getElementById("streetInRegion").removeAttribute("disabled");
    var activeNumberOfBuilding = document.getElementById("streetInRegion").value.length !=0;
    document.getElementById("numberOfBuilding").removeAttribute("disabled");
}


var activButtonSubmit = function() {
  var activeButton = document.getElementById("numberOfBuilding").value.length > 0;
  document.getElementById("buttonSubmit").removeAttribute("disabled");
}



function check() {
    var x = document.getElementById("changeRegion").value;
    var y = document.getElementById("regions").value;
    var s = document.getElementById("streetInRegion").value;
    var n = document.getElementById("numberOfBuilding").value;
    var info = `${x}, ${y}, ${s}, ${n}`
    alert (info)

    let userInformation = {
        region: document.getElementById("changeRegion").value,
        district: document.getElementById("regions").value,
        street: document.getElementById("streetInRegion").value,
        number: document.getElementById("numberOfBuilding").value
    }
    console.log(userInformation);
    alert(userInformation);

    let jsonUserInformation = JSON.stringify(userInformation);
    console.log(jsonUserInformation);
    alert(jsonUserInformation)
}


