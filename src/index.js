// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { connectStorageEmulator, getStorage } from 'firebase/storage';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5bullxx7Yc1ZY19LgCbUlPv3kHKSuszc",
  authDomain: "chuwebpage.firebaseapp.com",
  projectId: "chuwebpage",
  storageBucket: "chuwebpage.appspot.com",
  messagingSenderId: "1048147363707",
  appId: "1:1048147363707:web:4d7f6476941b666967dfde",
  measurementId: "G-DQYZQ99PPD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
console.log(app);


submitData.addEventListener('click', (e) => {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    
    const docRef = addDoc(collection(db, "users"), {
        name: name,
        age: age
    });

    alert('User added');
    });

    // Get all the data
    getAllData.addEventListener('click', (e) => {
       
        getDocs(collection(db, "users")).then(docSnap => {
            let tableBody = document.getElementById('table-body');
            tableBody.innerHTML = '';
    
            let ages = [];
            let labels = [];
    
            docSnap.forEach((doc)=> {
                let data = doc.data();
                let row = `<tr>
                  <td>${data.name}</td>
                  <td>${data.age}</td>
                  <td><button onclick="editUser('${doc.id}')">Edit</button>
                  <button onclick="deleteUser('${doc.id}')">Delete</button></td>
               </tr>`;
                tableBody.insertAdjacentHTML('beforeend', row);
    
                ages.push(data.age);
                labels.push(data.name);
            });
    
            let chartData = {
                labels: labels,
                datasets: [{
                    label: 'Age',
                    data: ages,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }]
            };
    
            let chartOptions = {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            };
    
            let ageChart = new Chart(document.getElementById('age-chart'), {
                type: 'bar',
                data: chartData,
                options: chartOptions
            });
        });
    });
