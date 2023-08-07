export let data = {
    "project profit": {
        "header": [
            {"id": "project_name", "type": "string", "caption": "Project name"},
            {"id": "total_by_project", "type": "float", "caption": "Total by project"},
            {"id": "project_type", "type": "string", "caption": "Project type", "align": "center"},
            {"id": "jan", "type": "float", "caption": "Jan"},
            {"id": "feb", "type": "float", "caption": "Feb"},
        ],
        "data": [
            ["Mimesis", "1024.3", "commercial", "2048.2", "4096.0"],
            ["Mako", "2345.1", "internal", "3465.3", {"d": "12.5", "color": "red"}],
            ["Edelweiss", "546.4", "commercial", "564.8", "4652.3"],
            ["Enji", "3045.6", "commercial", "2426.8", "6194.2"],
            ["Peklo","1253.3", "internal", "524.3", "1432.1"],
            ["Veeqo", "1875.9", "commercial", "782.6", "983.2"]
        ]
    },
    "exam result": {
        "header": [
            {"id": "first_name", "type": "string", "caption": "First name"},
            {"id": "last_name", "type": "string", "caption": "Last name"},
            {"id": "total_by_exam", "type": "float", "caption": "Total by exam", "align": "center"},
            {"id": "pass", "type": "boolean", "caption": "Pass"},
            {"id": "math", "type": "float", "caption": "Math"},
            {"id": "cs", "type": "float", "caption": "Computer Science"},
            {"id": "language", "type": "float", "caption": "Language"},
        ],
        "data": [
            ["Lua", "Dou", "4.6", "true", "4.1", "4.8", "4.5"],
            ["Miu", "Wan", {"d": "3.2", "color": "red"}, "false", "4.0", "3.0", "3.2"],
            ["Emmet", "Harrison", "4.4", "true", "4.1", "4.8", "4.5"],
            ["Harry", "Potter", "5.0", "true", "5.0", "5.0", "5.0"],
            ["James", "Darson", "4.8", "true", "5.0", "4.7", "5.0"],
        ]
    },
    "car statistic": {
        "header": [
            {"id": "car_model", "type": "string", "caption": "Car model"},
            {"id": "engine_power", "type": "number", "caption": "Engine power"},
            {"id": "drive_car", "type": "string", "caption": "Drive", "align": "center"},
            {"id": "average_price", "type": "number", "caption": "Average price"},
            {"id": "score", "type": "float", "caption": "Score", "align": "center"}
        ],
        "data": [
            ["Lada Granta", "89", "back", "3000", {"d": "3.7", "color": "red"}],
            ["KIA Rio", "100", "full", "3500", "4.2"],
            ["Hyundai Solaris", "110", "front", "2800", "4.5"],
            ["Chevrolet Niva", "115", "full", "2750", "4.6"],
            ["Audi R8", "215", "full", "150000", "5.0"],
        ]
    }

}