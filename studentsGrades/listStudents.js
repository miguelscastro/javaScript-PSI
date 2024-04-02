function listStudents(sala) {
    let table = 
        "<table style='font-size: 120%; border: 1px solid black; width: 30%; margin: 2% auto; text-align: center;'><thead><tr>"
        + "<th>Nome</th>"
        + "<th>RA</th>"
        + "<th>P1</th>"
        + "<th>P2</th>"
        + "<th>Média</th>"
        + "</tr>"
        + "</thead>"
        + "<tbody>"

    let classeP1 = 0, classeP2 = 0, aprovados = 0, DP = 0

    for (let i = 0; i < sala.length; i++) {
        let P1 = Number(sala[i].P1)
        let P2 = Number(sala[i].P2)
        let media = (P1 + P2) / 2

        classeP1 += P1, classeP2 += P2

        if (media >= 6) {
            aprovados++
        } else {
            DP++
        }
        let corMedia = media >= 6 ? 'blue' : 'red'
        table += "<tr><td>" + sala[i].nome + "</td>"
            + "<td>" + sala[i].ra + "</td>"
            + "<td style='color: " + corMedia + "'>" + sala[i].P1 + "</td>"
            + "<td style='color: " + corMedia + "'>" + sala[i].P2 + "</td>"
            + "<td style='color: " + corMedia + "'>" + media.toFixed(2) + "</td></tr>";

    }
    table += "</tbody></table>"
    document.write(table)

    let mediaTable = 
        "<table style='font-size: 120%; border: 1px solid black; width: 30%; margin: 2% auto; text-align: center;'><thead><tr>"
        + "<th>Média P1</th>"
        + "<th>Média P2</th>"
        + "<th>Aprovados</th>"
        + "<th>DP<th>"
        + "</tr>"
        + "</thead>"
        + "<tbody>"

    let mediaP1 = classeP1 / sala.length
    let mediaP2 = classeP2 / sala.length

    mediaTable += "<tr><td>" + mediaP1.toFixed(1) + "</td>"
        + "<td>" + mediaP2.toFixed(1) + "</td>"
        + "<td>" + aprovados + "</td>"
        + "<td>" + DP + "</td></tr>"

    document.write(mediaTable)

}
let students = [
    { nome: "Diego", ra: "0050832311001", P1: "10", P2: "8.5" },
    { nome: "Larissa", ra: "0050832311004", P1: "6", P2: "8" },
    { nome: "Matheus", ra: "0050832311023", P1: "5.5", P2: "6" },
    { nome: "Miguel", ra: "0050832311005", P1: "7", P2: "8" },
    { nome: "Caua", ra: "0050832311015", P1: "4.5", P2: "7" },
    { nome: "Cristhofer", ra: "0050832311014", P1: "9", P2: "8" },
    { nome: "Juliana", ra: "0050832311012", P1: "9", P2: "9" },
    { nome: "Murillo", ra: "0050832311014", P1: "8", P2: "8.5" },
    { nome: "Breno", ra: "0050832311014", P1: "0", P2: "8" },
    { nome: "Lidia", ra: "0050832311014", P1: "10", P2: "10" }
]
listStudents(students)
