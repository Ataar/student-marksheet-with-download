
    function genrateMarksheet()
    {
    let studentName = prompt('Enter Student Name');
    let english = Number(prompt('English Marks'))
    let urdu = Number(prompt('Urdu Marks'))
    let history = Number(prompt('History Marks'))
    let geograophy = Number(prompt('Geograophy Marks'))
    let politicalSceince = Number(prompt('PoliticalSceince Marks'))
    let sociology = Number(prompt('Sociology Marks'))


    let total = english + urdu + history + geograophy + politicalSceince + sociology;

    let percentage = (total / 600) * 100; 
    let result;
    let grade;
    let division;

    if(
    english<35 || urdu< 35 || history<35 || geograophy<35 || 
    politicalSceince<35 || sociology < 35 
    ){
    result = 'FAIL';
    grade='F';
    division='No Division'
    }

    else if(percentage >=75){
    result='PASS';
    grade='A';
    division='Distinction';

    }

    else if(percentage>=50){
    result = 'PASS';
    grade='C';
    division='Second Class'
    }

    else if(percentage>=35){
    result = 'PASS';
    grade='D';
    division='Third Class'
    }

    else{
    result='FAIL'
    grade='F'
    division='No division'
    }
    document.getElementById('marksheet').innerHTML= `
    <p class="para">उमेदवाराचे संपूर्ण नाव (आडनाव प्रथम) / CANDIDATE'S FULL NAME (SURNAME FIRST)</p>
    <h2>${studentName}</h2>
    <table>
    <tr class="text-center">
    <th>Subjects</th>
    <th>Marks</th>
    </tr>

    <tr>
    <td>English</td>
    <td>${english}</td>
    </tr>

    <tr>
    <td>Urdu</td>
    <td>${urdu}</td>
    </tr>

    <tr>
    <td>History</td>
    <td>${history}</td>
    </tr>

    <tr>
    <td>Geograophy</td>
    <td>${geograophy}</td>
    </tr>

    <tr>
    <td>PoliticalSceince</td>
    <td>${politicalSceince}</td>
    </tr>

    <tr>
    <td>Sociology</td>
    <td>${sociology}</td>
    </tr>

    <tr>
    <th>Total</th>
    <th>${total}</th>
    </tr>

    <tr>
    <th>Percentage</th>
    <th>${percentage.toFixed(2)}%</th>
    </tr>


    </table>

    <div class="result-box">
    <h3>Result: ${result}</h3>
    <h3>Grade: ${grade}</h3>
    <h3>Division: ${division}</h3>
    </div>  `;

    if (grade === 'A') {
    document.getElementById('marks').innerHTML = `
    <h4 class="gradA">\u{1F600} Congratulations! You have passed with Distinction.</h4>
    `;
    }   

    else {
    document.getElementById('marks').innerHTML = '';
    }

    }


function downloadMarksheet() {
const element = document.getElementById("pdf-content");

    // Buttons hide
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
if (generateBtn) {
    generateBtn.style.display = "none";
}

if (downloadBtn) {
    downloadBtn.style.display = "none";
}
    const options = {
        margin: 5,
        filename: "Marksheet.pdf",
        image: {
            type: "png",
            quality: 1
        },
        html2canvas: {
            scale: 3,
            useCORS: true,
            scrollY: 1
        },
        jsPDF: {
            unit: "mm",
            format: "a4",
            orientation: "portrait"
        },
        pagebreak: {
            mode: ['avoid-all', 'css', 'legacy']
        }
    };

    html2pdf()
        .set(options)
        .from(element)
        .save()
        .then(() => {

            // Buttons wapas show
            document.getElementById("generateBtn").style.display = "block";
            document.getElementById("downloadBtn").style.display = "block";

        });
}


