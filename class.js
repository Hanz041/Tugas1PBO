class Karyawan {
    constructor(nama, jabatan, gaji) {
        this.nama = nama;
        this.jabatan = jabatan;
        this.gaji = gaji;
    }


    getInformation() {
        return `nama karyawan adalah ${this.nama}, dengan jabatan ${this.jabatan}, memiliki gaji ${this.gaji}`;
    }

    getHistoryOccupation(){
        this.occupation = ["ojol", "pemadam", "komisaris"];
        return this.occupation;
    }

}

const karyawan = new Karyawan("Hanz", "Yutuber", "10jt");

console.log(karyawan.getInformation())
console.log(karyawan.getHistoryOccupation())