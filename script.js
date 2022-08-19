//===========================SOUNDS PLAYING==============================================
var called = false;

function correctAnswer(){

    let audio = new Audio();
    audio.src = "sounds/correctanswer.mp3";
    audio.play();
    called = true;
}

function wrongAnswer(){

    let audio = new Audio();
    audio.src = "sounds/wronganswer.mp3";
    audio.play();
    called = true;
}

function newRound(){

    let audio = new Audio();
    audio.src = "sounds/roundbreak.mp3";
    audio.play();
}

function lostLives(){

    let audio = new Audio();
    audio.src = "sounds/lostlives.mp3";
    audio.play();
}

//=============COUNTDOWN FUNCTION===============================
let timer = false;
function countdown(){

    let z = 5;
    var x = setInterval(function(){

        let timer = true;
        document.getElementById("countdown").innerHTML= z;
        z = Math.floor((z - 0.1)*10)/10;
        if(z < 0){
            clearInterval(x);
            //if(called == false) wrongAnswer();
        }

    }, 100);
}

//==============SHUFFLE FUNCTION=====================================================
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }


//========================QUESTIONS ARRAY=====================================================
const questions = [
    ["Motoryzacja","Z czym samochodowy gaźnik miesza paliwo?","Z powietrzem"],
    ["Sztuka","Jaką część ciała odciął sobie Vincent van Gogh?","Ucho"],
    ["Chemia","Jak się nazywał rosyjski chemik, twórca układu okresowego pierwiastków? (Można podać samo nazwisko)","Dmitrij Mendelejew"],
    ["Literatura","Jaki stopień wojskowy miał Michał Wołodyjowski w ostatniej części trylogii Sienkiewicza?","Pułkownik"],
    ["Historia","Miasto Stambuł nazywało się wcześniej Konstantynopol, a jak nazywało się to miasto w starożytności?","Bizancjum"],
    ["Państwa","Grecja jest republiką czy monarchią?","Republiką"],
    ["Słowa", "Jak z francuskiego nazywamy kartę dań wręczaną przez kelnera w restauracji?", "Menu"],
    ["Matematyka", "Kąt który ma 95 stopni jest ostry czy rozwarty", "Rozwarty"],
    ["Słownictwo", "Jak nazywa się dosłowne przytoczenie fragmentu czyjegoś tekstu lub wypowiedzi?", "Cytat"],
    ["Unia Europejska", "W której Europejskiej stolicy mieści sie główna kwatera Nato", "Bruksela"],
    ["Literatura", "Ciamajda, zgrywasz i ważniak to imiona jakich bajkowych postaci", "Smerfów"],
    ["Państwa", "W którym państwie płaci się szeklami", "w Izraelu"],
    ["", "Czy passa może być zła?", "Tak, może być zła"],
    ["Sport", "Czy w footbalu amerykańskim można przenieść piłkę w rękach?", "Można, można kopnąć, można przenieść, można rzucić..."],
    ["", "Jak nazywa się pensja wypłacana żołnierzom pełniącym obowiązkowom służbę wojskową?", "Żołd"],
    ["Historia", "Bostońska herbatka poprzedziła rewolucję francuską, amerykańska, czy angielską?", "Amerykańską, była wczesnym epizodem ameyrykańskiej rewolucji"],
    ["Gry hazardowe", "Jaką nazwę w grze w pokera nosi zestaw 5 kolejnych kart w jednym kolorze", "Poker"],
    ["Fizyka", "Czy prędkość światła w próżni jest wielkością stałą?", "Tak"],
    ["", "Czy grecki matematyk i wynalazca Arhimedes żył po czy przed Chrystusem", "Przed Chrystusem. W III wieku p.n.e."],
    ["Geografia", "Na jakim kontynencie wznosi się masyw wulkaniczny o nazwie kamerun?", "Afryka"],
    ["Komiks", "Jak nazywa się leniwy, sarkastyczny kot, tytułowy bohater amerykańskiego komiksu Jamesa Davisa?", "Garfield"],
    ["Matematyka", "Ile stopni wynosi okres funkcji sinus?", "360 stopni. Co 360 stopni funkcja sinus powtarza ten sam przebieg"],
    ["Kalendarz", "Rok 1000 to wiek 10 czy 11", "10, to ostatni rok 10 wieku"],
    ["Państwa", "W którym europejskim państwie władze ustawodawczą sprawuje parlament o nazwie Werhowna rada ", "Na ukrainie"],
    ["	Historia	", "	Czy Czyngis Chan stworzył Imperium Mongolskie w średniowieczu czy w starożytności?	", "	W średniowieczu	"],
["	Flagi i godła	", "	Jaka roślina jest symbolem Szkocji?	", "	Oset	"],
["	Geografia	", "	Częścią jakiego oceanu jest Morze Hebrydzkie?	", "	Atalantyku	"],
["	Literatura	", "	Jakie ptaki roznoszą pocztę w świecie Harry'ego Pottera bohatera książek Joanne Rowling?	", "	Sowy	"],
["	Geografia	", "	W jakim państwie stoi Stonehenge, megalityczna budowla kamienna wzniesiona w okresie neolitu?	", "	Wielkiej Brytanii	"],
["	Historia	", "	W której branży wielki sukces odniosła pochodząca z Krakowa Helena Rubinstein - w branży komputerowej, filmowej czy kosmetycznej?	", "	Kosmetycznej	"],
["	Sport	", "	Koszykówka. Ile punktów zdobywa się za celny rzut osobisty do kosza z linii rzutów wolnych?	", "	1	"],
["	Botanika	", "	Czy owoce bzu czarnego są jadalne?	", "	Tak	"],
["	Matematyka	", "	Jedna setna to dziesięć, do której potęgi?	", "	-2	"],
["	Geografia	", "	Plac św. Marka z bazyliką i Pałac Dożów to atrakcje turystyczne, którego miasta?	", "	Wenecji	"],
["	Botanika	", "	Jak potocznie nazywany jest mniszek lekarski?	", "	Dmuchawcem	"],
["	Placester	", "	Ile kosztuje jeden kontrakt IDX dla konta na subskrypcji Office Builder	", "	$9	"],
["	Wybitne postaci	", "	Jan Kochanowski i Mikołaj Kopernik studiowali w tym samym włoskim mieście. W którym?	", "	Padwie	"],
["	Kinematografia	", "	Z którego państwa pochodzą produkcje filmowe określane mianem Bollywoodzkich?	", "	Indii	"],
["	Matematyka	", "	Jeżeli samochód przejeżdża 1 km w minutę, to w ile sekund przejeżdża 100 m?	", "	6	"],
["	Państwa	", "	Czy Baskowie mają swój odrębny język?	", "	Tak. Baskowie mówią językiem, który nie wywodzi się z języków indoeuropejskich, wykazuje za to pewne podobieństwo do dialektów, którymi posługują się pewne odosobnione populacje w dolinach Kaukazu. Euskara (język baskijski) był przez wiele wieków izolowany od wpływów z zewnątrz, przez co w języku tym bardzo mało jest zapożyczeń, obcych elementów gramatycznych oraz składniowych.	"],
["	Geografia	", "	Wolin to wyspa przybrzeżna, na którym morzu?	", "	Bałtyckim	"],
["	Biologia	", "	Samiec czy samica wysiaduje jajo pingwina cesarskiego?	", "	Samiec	"],
["	Flagi i godła	", "	Z ilu kolorów składa się flaga Wielkiej Brytanii	", "	Trzech, niebieskiego, czerwonego i białego.	"],
["	Mitologia	", "	Czy puszka Pandory była pełna szczęścia.	", "	Nie	"],
["	Powiedzenia	", "	Której części ciała nie należy pchać między drzwi?	", "	Palca. Nie pchaj palca między drzwi, czyli nie robić czegoś, bo wynikną z tego kłopoty.	"],
["	Biologia	", "	Czy foka jest ssakiem?	", "	Tak 	"],
["	Geografia	", "	Na którym kontynencie mieszkali Inkowie?	", "	Ameryce Południowej	"],
["	Chemia	", "	Dioksyny to organiczne czy nieorganiczne związki chemiczne?	", "	Organiczne. Dioksyny to ogólna nazwa silnie trujących chemicznych związków należących do rodzaju chlorowanych węglowodorów aromatycznych.	"],
["	Biologia	", "	Czy ropuchy są w Polsce chronione?	", "	Tak	"],
["	Język polski	", "	Jak piszemy nieuczciwy łącznie czy rozdzielnie?	", "	Łącznie	"],
["	Historia	", "	W którym roku miała miejsce bitwa pod Grunwaldem	", "	1410	"],
["	Historia	", "	W którym roku miał miejsce chrzest Polski (można pomylić się o 5 lat)	", "	966	"],
["	Powiedzenia	", "	Jak potocznie nazywamy długie nici pajęczyny unoszone przez wiatr wczesną jesienią?	", "	Babie lato	"],
["	Stary Testament	", "	Kto zabił Goliata kamieniem z procy?	", "	Dawid	"],
["	Sport	", "	W której dyscyplinie sportowej sukcesy odnosi Tomasz Majewski?	", "	Pchnięcie Kulą	"],
["	Botanika	", "	Drożdże to grzyby jedno- czy wielokomórkowe?	", "	Jednokomórkowe	"],
["	Przysłowia	", "	Proszę dokończyć przysłowie - kto pod kim dołki kopie …?	", "	Ten sam w nie wpada	"],
["	Przysłowia	", "	Proszę dokończyć przysłowie - kto mieczem wojuje, ...?	", "	Od miecza ginie	"],
["	Transport	", "	Jak nazywa się mały szynowy pojazd z ręcznym napędem?	", "	Drezyna	"],
["	Sztuka	", "	Sonet to utwór muzyczny czy literacki?	", "	Literacki	"],
["	Matematyka	", "	Ile wynosi pierwiastek 3 stopnia z 125?	", "	5	"],
["	Literatura	", "	Z ilu tomów składa się powieść Władysława Reymonta Chłopi ?	", "	4	"],
["	Biologia	", "	Perukowiec to krzew, ptak czy gad?	", "	Krzew	"],
["	Historia	", "	W którym roku rozpoczęła się II wojna światowa?	", "	1939	"],
["	Historia	", "	W którym roku rozpoczęła się I wojna światowa?	", "	1914	"],
["	Flagi i godła	", "	Liść jakiej rośliny widnieje na fladze Kanady?	", "	Klonu	"],
["	Mitologia	", "	Jak miał na imię brat Ikara?	", "	Dedal	"],
["	Chemia	", "	Nazwa jakiego pierwiastka chemicznego brzmi tak samo jak imię gentelmena-włamywacza, bohatera powieści sensacyjnych Lupin (Lupą)", "	Arsen	"],
["	Geografia	", "	Jak nazywa sięnajwyższy szczyt Ziemii?	", "	Mount Everest	"],
["	Fizyka	", "	Czego jednostką w układzie SI jest Paskal?	", "	Ciśnienia	"],
["	Geografia	", "	Ile państw znajduje się na Antylach - więcej czy mniej niż 8?	", "	Więcej	"],
["	Anatomia człowieka	", "	Jak nazywa się ścięgno łączące mięsień trójgłowy łydki z kością piętową?	", "	Ścięgno achillesa	"],
["	Biologia	", "	Ile par odnóży mają raki?	", "	5	"],
["	Geografia	", "	Harlem i Bromx to dzielnice którego miasta?	", "	Nowego Jorku	"],
["	Geografia	", "	W którym województwie leży Kołobrzeg?	", "	Zachodniopomorskie	"],
["	Mitologia	", "	Jak w mitologii greckiej nazywał się bóg podziemii, tudzież piekła?	", "	Hades	"],
["	Matematyka	", "	Która figura geometryczna może być pitagorejska, ostrokątna, indyjska, egipska?	", "	Trójkąt	"],
["	Odznaczenia wojskowe	", "	Odznaczenie wojskowe Krzyż Walecznych zostało ustanowione w Poslce przed czy po II wojnie światowej?	", "	Przed	"],
["	Fizyka	", "	Przyśpieszenie ziemskie wynosi w przybliżeniu 9,8 m/s 2 czy 9,8 m/s3?	", "	9,8 m/s2	"],
["	Motoryzacja	", "	Jaki jest najlepszy silnik na świecie	", "	1,9 tdi	"],
["	Religia	", "	Ilu papieży nosiło imię Urban? - 1 czy 8?	", "	8	"],
["	Placester	", "	Ile gotowych templatetów oferuje Placester w swojej ofercie? Można pomylić się o 5	", "	31	"],
["	Placester	", "	Jakie jest rozwinięcie skrótu CRM	", "	Client Relationship Manager	"],
["	Placester	", "	Jak nazywa się CEO Placestera?	", "	Matt Barba	"],
["	Placester	", "	Ile rodzajów setupów znajduje się obecnie w ofercie serwisów Placestera?	", "	4. Jest to semi-custom, custom, enterprise oraz basic setup	"],
["	Placester	", "	Ile maksymalnie kontraktów IDX może być podpiętych do jednej strony? Można pomylić się o 2	", "	Nie ma ograniczenia	"],
["	Geografia	", "	Ile wynosi różnica godzin pomiędzy strefami czasu wschodniego a czasu środkowoeuropejskiego?	", "	6 godzin.	"],
["	Placester	", "	Czy możliwe jest ustawienie kolejki blog postów, które powinny pojawić się na stronie, np. za tydzień?	", "	Tak, posty mogą być zaschedulowane na przyszłość.	"],
["	Placester	", "	Jaki jest miesięczny koszt subskrypcji Office Builder opłaconej z góry za rok?	", "	240 dolarów.	"],
["	Placester	", "	Czy na subskrypcji Starter w Customizerze dostępny jest moduł text?	", "	Nie.	"],
["	Placester	", "	Ile kosztuje AAP czyli Active Agent Pricing za jednego agenta?	", "	5 dolarów	"],
["	Placester	", "	Czym jest AAP - active agent pricing?	", "	Jest to opłata za każdą aktywną stronę agenta.	"],
["	Zoologia	", "	Czy dziobak, ssak z rzędu stekowców ma ogon?	", "	Tak, taki spłaszczony, spory	"],
["		", "	Który taniec pochodzi z Kuby, samba czy rumba?	", "	Rumba, samba to taniec brazylisjki	"],
["	Astronomia	", "	Ile księżyców Jowisza odkrył Galileusz?	", "	4, są one obecnie zwane księzycami galileuszowymi	"],
["	Poezja	", "	Z ilu sylab składa się Haiku, popularna odmiana poezji w Japonii?11, 13 czy 17 sylab?	", "	17 sylab. Wierszowane po kolei 5, 7 i 5 sylab	"],
["		", "	Pikling i moskalik to różnie przyrządzona jaka ryba?	", "	Śledź	"],
["	Ornitologia	", "	Czy paw jest gatunkiem ptaka zagrożonego wyginięciem i wpisanego do czerwonej księgi?	", "	Nie. Paw radzi sobie całkiem nieźle w naturze	"],
["	Archeologia	", "	Jaką nazwe nosi dolina w Egipcie, w której odkryto kilkadziesiąt skalnych grobowców, między innymi grobowiec Tutenhamona. 	", "	Dolina Królów	"],
["		", "	Jakim słowem można zastąpić przysłówek literalnie?	", "	Dosłownie/ściśle/precyzyjnie	"],
["	Flagi	", "	Którego koloru nie ma na fladze węgier? Białego niebieskiego czy zielonego.	", "	Niebieskiego	"],
["		", "	Jak z języka niemieckiego nazywamy potocznie narożnik, róg domu. Często używane również do określania zakrętu.	", "	Winkiel. Wygladać zza winkla, stać za winklem, latać po winklach	"],
["	Wielcy wodzowie	", "	Czy Józef Piłsudski był wybrany na prezydenta Rzeczy Pospolitej	", "	Był. Po przewrocie majowym w 26 roku został wybrany na prezydenta ale zrzekł się tej godności.	"],
["	Geologia	", "	Granit, dioryt i sjenit. Są to skały przeobrażone czy magmowe	", "	Magmowe	"],
["	Literatura	", "	Kto napisał potop?	", "	Henryk Sienkiewicz.	"],
["	Chemia	", "	Temperatura wrzenia siarkowodoru wyrazona w stopniach celcjusza jest dodatnia czy ujemna?	", "	Ujemna. Jest to -60 stopni celcjusza	"],
["	Święci	", "	Do jakiego świętego zwracamy się gdy coś zgubimy?	", "	Do świetego antoniego	"],
["	Święci	", "	Który święty jest patronem kierowców?	", "	Święty Krzysztof	"],
["	Kino	", "	Ile odcinków amerykańskiego serialu Moda na sukces zostało wyemitowanych w Polsce? Można pomylić się o 50.	", "	8085. W USA było to 8732	"],
["		", "	Który z królów polski widnieje na banknocie 20 zł?	", "	Bolesław Chrobry	"],
["		", "	Liną o nazwie Fau stawia się żagiel, przywiązuje sie jacht do lądu czy przywiązuje kotwice przed wrzuceniem do wody?	", "	Stawia się żagiel.	"],
["	Kino	", "	Jaki aktor wcielił się w główną rolę Neo w cyklu filmów Matrix	", "	Keanu Reeves	"],
["		", "	Tropki to nazwa zewnętrznego czy wewnętrznego pokrycia namiotu?	", "	Zewnętrznneg	"],
["	Broń	", "	Z czasów której wojny pochodzi ironiczna nazwa niemieckich cięzkich dział gruba berta	", "	Z czasów I wojny światowej. Wywodzi się od berty Krup - córki i wnuczki producentów stali. Był to najciezszy mozdziez I wojny światowej	"],
["	Anatomia człowieka	", "	Goleń to część kończyny górnej czy dolnej?	", "	Dolnej	"],
["	Ornitologia	", "	Która wersja jest prawidłowa? Jastrząb z rodziny orłowatych czy orzeł z rodziny jastrzębiowatych? 	", "	Ta 2, orzeł z rodziny jastrzębiowatych.	"],
["	Święta narodowe	", "	Który święty jest patronem Irlandzkiego święta narodowego i religijnego obchodzonego w marcu 	", "	Święty Patryk	"],
["		", "	Pojazd oznaczony literą N zarejestrowany jest w królestwie Niderlandów czy Norwegii?	", "	Norwegii	"],
["	Botanika	", "	Czy parzydło leśne to ludowa pokrzywy?	", "	Nie	"],
["	Grecka mitologia	", "	Czy każda z 9 muz była siostrą pozostałych?	", "	Tak, wszystkie były córkami Zeusa i Tytanidy	"],
["		", "	Jak nazywa się opaska papierowa na paczce banknotów świadcząca o tym ze zostały one sprawdzone i policzone	", "	Banderola	"],
["	Flagi	", "	2 Państwa na świecie mają flagi w kształcie kwadratu. Proszę podać 1 z nich.	", "	Watykan lub Szwajcaria.	"],
["		", "	Jak inaczej, słowem pochodzącym z łaciny nazywamy tętno?	", "	Puls	"],
["		", "	Ser koryciński z podlasia wyrabia się z mleka krowiego czy owczego?	", "	Krowiego	"],
["	Fizyka	", "	Która jednostka energii jest większa? Dżul czy kaloria?	", "	Kaloria. Na 1 kalorię składa się w przyblizeniu 4,18 dżula	"],
["		", "	Baran francuski i olbrzym belgijski to rasy którego zwierzęcia?	", "	Królika	"],
["	Sztuka	", "	Jakiego koloru jest strój stańczyka na obrazie Jana Matejki Stańczyk?	", "	Czerwony	"],
["		", "	Jak nazywa się nauka o społeczeństwie. Słowo pochodzi z Greki.	", "	Socjologia	"],
["		", "	Toga to ubiór wywodzący się ze starożytnej Grecji czy Rzymu.	", "	Rzymu.	"],
["	Sztuka	", "	Jak nazywa się krajobraz przedstawiony w malarstwie. Słowo pochodzi z języka francuskiego	", "	Pejzaż	"],
["	Literatura	", "	Jak miał na imię Wokulski, głowny bohater Lalki Bolesława Prusa	", "	Stanisław	"],
["		", "	Czy istnieją jadalne minerały?	", "	Tak, np sól.	"],
["	Historia	", "	Kto był założycielem dynastii Jagielonów	", "	Władysław Jagiełło	"],
["		", "	Jeżeli stoimy twarzą na południe, to po której stronie mamy wschód?	", "	Po lewej.	"],
["	Geografia	", "	Na którym kontynencie leży Laponia	", "	W Europie	"],
["	Zoologia	", "	Jakim organem oddychają ryby	", "	Skrzelami	"],
["	Terminy staropolskie	", "	Dawne słowo powała oznaczało kiedyś podłogę czy sufit?	", "	Sufit	"],
["		", "	Jeden hektar, ile to arów?	", "	100	"],
["	Astrologia	", "	Czy słońce należy do gwiazd zwanych karłami.	", "	Tak	"],
["	Historia	", "	Które powstanie trwało najdłużej, kościuszkowskie, listopadowe czy styczniowe.	", "	Styczniowe, trwało ono aż 17 miesięcy	"],
["	Religia	", "	W jaki dzień tygodnia w kosciele katolickim obchodzony jest Popielec?	", "	W Środę, tzw. środa popielcowa	"],
["	Sztuka	", "	Który styl w sztuce jest wcześniejszy Barok czy manieryzm?	", "	Manieryzm, stanowił on przejściową faze od renesansu do baroku	"],
["	Chemia	", "	Czy tzw. suchy lód zawiera wodę?	", "	Nie, jest to dwutlenek węgla w stanie stałym	"],
["	Matematyka	", "	Która liczba jest większa 0 do potęgi 10 czy 1 do potęgi 100	", "	Są równe, obie wynoszą 1	"],
["	Botanika	", "	Lebioda, zwana też komosą biała jest trująca czy jadalna	", "	Jadalna	"],
["	Literatura	", "	Chłopców o imieniu na jaką literę Pan Kleks zapraszał do swojej akademii?	", "	Na literę A.	"],
["	Historia starozytna	", "	Oko za oko, ząb za ząb - to fragment jakiego kodeksu?	", "	Hammurabiego. uwzględniono w nim zasadę odpłaty równie okrutnej jak czyn przestępczy, właśnie w myśl zasady oko za oko, ząb za ząb	"],
["	Geografia	", "	Jak nazywa się najdłuższa rzeka świata?	", "	Nil, rzeka płynąca w Afryce	"],
["		", "	Czy wieloryby karmią młode mlekiem?	", "	Tak, są ssakami	"],
["	Literatura	", "	Tony Start to bohater komiksów ukrywający się pod jakim pseudonimem?	", "	Iron Man	"],
["		", "	Ilu cyfr rzymskich uzyjemy do zapisania liczby 165?	", "	4 - C L X V	"],
["	Zoologia	", "	Czy żółw ma zęby?	", "	Nie, ma bezzębne szczęki pokryte listwami rogowymi	"],
["	Kino	", "	Kto jest reżyserem polskich filmów Pitbul i Kobiety Mafii?	", "	Patryk Vega	"],
["	Kryptowaluty	", "	Każdy bitcoin dzieli sie na mniejsze jednostki zwane Satoshi. Na ile satoshi dzieli się bitcoin?	", "	Na 100 milionów	"],    
    
];
  
  shuffle(questions);

//NEXT QUESTION
var i = -1;
function newQuestion(){
    if(i==questions.length) alert("Koniec pytań!");
    i++;
    document.getElementById("category").innerHTML = questions[i][0];
    document.getElementById("question").innerHTML = questions[i][1];
    document.getElementById("answer").innerHTML = questions[i][2];
    document.getElementById("questionNumber").innerHTML = i+1 + " z " + questions.length;
    called = false;
}









    
      
