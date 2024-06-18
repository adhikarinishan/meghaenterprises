import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  isMobileDevice: boolean = false;
  isMobileDeviceOurWork: boolean = false;

  defaultBrowserLang: string = 'en';

  ClientlistData1 = [
    'Vrundavan Co.Op Housing Society Ltd., Ambernath (E)',
    'Reliance Apex Co.Op Housing Federation Ltd., Ambernath (E)',
    'Shiv-Sonal Palace Co.Op Housing Society Ltd., Ambernath (E)',
    'Shree Dattatray Co.Op Housing Society Ltd., Kulgaon, Badlapur (W)',
    'Riddhi Co.Op Housing Society Ltd., Kalyan (W)',
    'Siddhi Co.Op Housing Society Ltd., Kalyan(W)',
    'Riddhi Siddhi Co.Op Housing Society Ltd., Nandivali,Kalyan(E)',
    'Om Yashodhara Co.Op Housing Society Ltd.,Katemanivali,Kalyan(E)',
    'Shree Sai Deepak Co.Op Housing Society Ltd.,Katemanivali,Kalyan(E)',
    'Yogesh Co.Op Housing Society Ltd., Near Prem Auto,Kalyan(W)',
    'Mukti Co.Op Housing Society Ltd., Ulhasnagar-4',
    'Sweet New House Co.Op Housing Society Ltd., Kalyan(E)',
    'Deepkunj  Co.Op Housing Society Ltd., Dombivali (W)',
    'Siddhashree Co.Op Housing Society Ltd., Dombivali (W)',
    'Siddhesh Arcade Co.Op Housing Society Ltd., Dombivali (W)',
    'Sai Prasad Co.Op Housing Society Ltd., Ambernath (E)',
    'Kamlesh Co.Op Housing Society Ltd., Ambernath (E)',
    'Muktai Co.Op Housing Society Ltd., Ulhasnagar- 4',
    'Kanwar Apartment Co.Op Housing Society Ltd., Ulhasnagar- 4',
    'Vaibhav-Vihar Co.Op Housing Society Ltd., Ambernath (E)',
    'Vaishnavi Park Co.Op Housing Society Ltd., Ulhasnagar- 4',
    'Katarias Shivsagar Co.Op Housing Society Ltd., Ambernath (E)',
    'Shivsagar Co.Op Housing Society Ltd., Ambernath (E)',
    'Radha VasantVihar R2 Co.Op Housing Society Ltd., Ambernath (E)',
    'Radha VasantVihar Co.Op Housing Society Ltd., Ambernath (E)',
    // 'Reliance Apex Co.Op Housing Federation Ltd., Ambernath (E)',
    'Ave Mariya Co.Op Housing Society Ltd., Ambernath (W)',
    'Sai Heramb Co.Op Housing Society Ltd., Ambernath (E)',
    'Bhagyoday Co.Op Housing Society Ltd., Ambernath (E)',
  ];

  ClientlistData = [
    'Reliance Apex Co.Op Housing Federation Ltd., Palegaon, Ambernath (E)',
    'Shiv-Sonal Palace Co.Op Housing Society Ltd.,Shivganga Nagar, Ambernath (E)',
    'Shree Dattatray Co.Op Housing Society Ltd., Kulgaon, Badlapur (W)',
    'Vrundavan Heights Co.Op Housing Society Ltd., Near Rahul Estate, Ambernath (E)',
    'Riddhi Co.Op Housing Society Ltd., Chikanghar, Kalyan (W)',
    'Siddhi Co.Op Housing Society Ltd., Chikanghar, Kalyan(W)',
    'Riddhi Siddhi Co.Op Housing Society Ltd., Nandivali, Kalyan(E)',
    'Om Yashodhara Co.Op Housing Society Ltd.,Katemanivali, Kalyan(E)',
    'Shree Sai Deepak Co.Op Housing Society Ltd.,Katemanivali, Kalyan(E)',
    'Yogesh Co.Op Housing Society Ltd., Near Prem Auto, Kalyan(W)',
    'Mukti Co.Op Housing Society Ltd., Maratha Section, Ulhasnagar-4',
    'Sweet New House Co.Op Housing Society Ltd., Vitthalwadi, Kalyan(E)',
    'Deepkunj Co.Op Housing Society Ltd., Mahtma Phule Road, Dombivali (W)',
    'Siddhashree Co.Op Housing Society Ltd., Bhoirwadi, Dombivali (W)',
    'Siddhesh Arcade Co.Op Housing Society Ltd., Near Gavdevi Water Tank, Dombivali (W)',
    'Sai Prasad Co.Op Housing Society Ltd., Vadavali, Ambernath (E)',
    'New Udyan Co.Op Housing Society Ltd., Katemanivali, Kalyan (E)',
    ' Manisha Villa Co.Op Housing Society Ltd., Vadavali, Ambernath (E)',
    ' Shantideep Co.Op Housing Society Ltd., Morivali, Ambernath(E)',
    ' Om Sushan Co.Op Housing Society Ltd., Nandivali, Dombivali (E)',
    ' Jay Maa Santoshi Co.Op Housing Society Ltd., Katemanivali, Kalyan (E)',
    ' Maa Laxmi Co.Op Housing Society Ltd., Katemanivali, Kalyan (E)',
    ' Shree Sai Santoshi Co.Op Housing Society Ltd., Katemanivali, Kalyan (E)',
    ' Maa Santoshi Co.Op Housing Society Ltd., Building No-5, Katemanivali, Kalyan (E)',
    ' Sadashiv Puram Co.Op Housing Society Ltd., Morivali, Ambernath(E)',
    'Bhagyoday Co.Op Housing Society Ltd., Morivali, Ambernath (E)',
    'Kamlesh Co.Op Housing Society Ltd., Kansai Section, Ambernath (E)',
    'Muktai Co.Op Housing Society Ltd., Lal Chakki Road, Ulhasnagar- 4',
    'Kanwar Apartment Co.Op Housing Society Ltd., Near Ambernath Railway Station, Ulhasnagar- 4',
    'Vaibhav-Vihar Co.Op Housing Society Ltd., Kansai Section, Ambernath (E)',
    'Vaishnavi Park Co.Op Housing Society Ltd., Maratha Section, Ulhasnagar- 4',
    'Katarias Shivsagar Co.Op Housing Society Ltd., Morivali, Ambernath (E)',
    'Shivsagar Co.Op Housing Society Ltd., Kansai Section, Ambernath (E)',
    'Radha VasantVihar R2 Co.Op Housing Society Ltd., Palegaon, Ambernath (E)',
    'Radha VasantVihar Co.Op Housing Society Ltd., Palegaon, Ambernath (E)',
    'Ave Mariya Co.Op Housing Society Ltd., Near Fatima Church, Ambernath (W)',
    'Sai Heramb Co.Op Housing Society Ltd., Ambernath (E)',
    'Shivgaurav Co.Op Housing Society Ltd., Shiv Ganga Nagar, Ambernath (E)',
    'Raghukul Co.Op Housing Society Ltd., Kansai Section, Ambernath (E)',
    'Suraj Co.Op Housing Society Ltd., Kansai Section, Ambernath (E)',
    'Shiv Shradha  Katarias Co.Op Housing Society , Morivali Ambernath  (E)',
    'Shiv Shakti  Katarias Co.Op Housing Society , Morivali Ambernath  (E)',

    'Amber heights Co.Op Housing Societies Federation Ltd., Near Green City, Ambernath (E)',
    'Katarias Radha Vasant Vihar Wing R1 Co.Op Housing Society Ltd., Palegaon, Ambernath (E)',
    'Ekveera Aai Darshan C, D, E & F wing Co.Op Housing Society Ltd., Samath Nagar, Near Tukaram Plaza, Aadivali-Dhokali, Tal- Ambernath',
    'Gurudatta Sahwas Co.Op Housing Society Ltd., Manpada Rd, Dombivali (E)',
    'Gurudatta Co.Op Housing Society Ltd., Behind 50-50 Dhaba, Pisavali, Kalyan (E)',
    'Janki Dham Co.Op Housing Society Ltd., 100 ft. Road, Chinchpada, Kalyan (E)',
    'Laxmi Palace Co.Op Housing Society Ltd., Hanuman Nagar, Katemanivali, Kalyan (E)',
    'Madhav Co.Op Housing Society Ltd., Murlidhar Ali, Parnaka, Kalyan (E)',
    'New Ajay Co.Op Housing Society Ltd., Hanuman Nagar, Katemanivali, Kalyan (E)',
    'New Sanjay Co.Op Housing Society Ltd., Hanuman Nagar, Katemanivali, Kalyan (E)',
    'Param Shree Krishna Co.Op Housing Society Ltd., Hanuman Nagar, Katemanivali, Kalyan (E)',
    'Rainbow Co.Op Housing Society Ltd., Rahul Estate, Ambernath (E)',
    'Kanyakumari Co.Op Housing Society Ltd., Chinchpada Rd., Kalyan (E)',
    'Sai Shyam Co.Op Housing Society Ltd., Opp. Nitin Raj Bar, Katemanivali, Kalyan (E)',
    'Shyam Nx. Co.Op Housing Society Ltd., Kansai, Ambernath (E)',
    'Shantiniketan Co.Op Housing Society Ltd., Hanuman Nagar, Katemanivali, Kalyan (E)',
    'Shivkedar Co.Op Housing Society Ltd., Rahul Estate, Ambernath (E)',
    'Vinay Co.Op Housing Society Ltd., Hanuman Nagar, Katemanivali, Kalyan (E)',
    'Navshree Sai Kunj Co.Op Housing Society Ltd., Katemanivali Rd., Nana Pavshe Chowk, Kalyan (E)',
    'Roopmilan Co.Op Housing Society Ltd., Opp. Venus Cinema, Ulhasnagar - 4',
    'Shobhana Co.Op Housing Society Ltd., Sai section, Ambernath (E)',
    'Sai Digambar Co.Op Housing Society Ltd., Behind Holy Cross School, Nandivali, Kalyan (E)',
    'Shivam Co. Op. Housing Society Ltd., Kansai Section, Ambernath (E)',
    'Kapleshwar Co. Op. Housing Society Ltd., Kailash Colony Chowk, Near Hanuman Mandir, Ulhasnagar -5',
    'Manik Sadan Co. Op. Housing Society Ltd., Kurla Camp, Ulhasnagar-4',
    'Malhar Park Co. Op. Housing Societies Association Ltd., Mauje-Katemanivali, Chinchpada Rd., Near Khadan, Kalyan (E)',
    'Skyline Co. Op. Housing Society Ltd., Pune Link Rd., Nitin Raj Bar, Katemanivali, Kalyan (E)',
    'Unity Co. Op. Housing Society Ltd., Katemanivali, Nana Pavshe Chowk, Kalyan (E)',
    'New Vishal Sagar Co. Op. Housing Society Ltd., Katemanivali, Near Hanuman Mandir, Kalyan (E)',
  ];

  updateDevice(status: boolean) {
    this.isMobileDevice = status;
  }

  updateDeviceForOurWork(status: boolean) {
    this.isMobileDeviceOurWork = status;
  }
}
