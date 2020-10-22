import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpService {


  constructor(private firestore: AngularFirestore ) { }


  createEmployee(EMPname, EMPage, EMPcompany, EMPsalary, EMPgender) {
    return this.firestore.collection('Employee').add({
      name: EMPname,
      age: EMPage,
      company: EMPcompany,
      salary: EMPsalary,
      gender: EMPgender,

    });
  }

  createInstitution(institutioNname, institutiocity, institutiodist, institutiostate) {
    return this.firestore.collection('Institutes').add({
      name: institutioNname,
      city: institutiocity,
      district: institutiodist,
      state: institutiostate,
    });
  }

  getEmployeeServie() {
    return this.firestore.collection('Employee').snapshotChanges();
  }


  getById(id: string) {
    // return this.db.object('news/' + id);
     this.firestore.doc('dd'+id)

}

}
