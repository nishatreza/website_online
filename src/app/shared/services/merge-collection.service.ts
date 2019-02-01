// import {Observable} from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
// import "rxjs/add/operator/mergeMap";
import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
// import { Observable } from 'rxjs/Rx';

@Injectable()
export class MergeCollection{
    constructor(private afs:AngularFirestore)
    {
        this.collectionInitialize();
    }
    collectionInitialize()
    {
        // return this.afs.collection('userFavouriteServices', ref => ref.where('serviceId', '==', serviceId)).valueChanges()
        // .map((myfavourite: any[]) =>myfavourite.map(p => p.serviceId))
        // .mergeMap((serviceId: string[]) => Observable.combineLatest(serviceId.map(id => this.afs.collection('serviceInfo', ref => ref.where('serviceId', '==', serviceId)).valueChanges())));
}
    
}
