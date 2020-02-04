// classe à simplifier
export class Collegue {

    matricule: string;
    nom: string;
    prenoms: string;
    email: string;
    dateDeNaissance: Date;
    photoUrl: string;



    constructor(_matricule: string,
        _nom: string, _prenoms: string, _email: string, _dateDeNaissance: Date, _photoUrl: string) {
        this.matricule = _matricule;
        this.nom = _nom;
        this.prenoms=_prenoms;
        this.email = _email;
        this.dateDeNaissance = _dateDeNaissance;
        this.photoUrl = _photoUrl;

    }


}
