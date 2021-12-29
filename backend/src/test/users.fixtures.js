export const users = [
	//Valid User 0
	{
		firstname: "dkgfjdgkj",
		lastname: "jhgcuey",
		mail: "gcye@herg.ieurh",
		password: "ejhrmlmlg",
        birthDate: "1958-02-15"
	},
	// without firstname 1
	{
		firstname: "",
		lastname: "jhgcuey",
		mail: "gcye@herg.ieurh",
		password: "ejhrg",
        birthDate: "1958-02-15"
	},
	// invalid first 2
	{
		firstname: 667, //typeof(firstname) != string
		lastname: "ekip",
		mail: "gcye@herg.ieurh",
		password: "ejhrg",
        birthDate: "1958-02-15"
	},
	// without lastname 3
	{
		firstname: "fred",
		lastname: "",
		mail: "gcye@herg.ieurh",
		password: "ejhrg",
        birthDate: "1958-02-15"
	},
	// invalid lastname 4
	{
		firstname: "fred",
		lastname: 2121,//typeof(lastname) != string
		mail: "gcye@herg.ieurh",
		password: "ejhrg",
        birthDate: "1958-02-15"
	},
	// without mail 5
	{
		firstname: "fred",
		lastname: "jhgcuey",
		mail: "",
		password: "ejhrg",
        birthDate: "1958-02-15"
	},
	// Incorrect Mail 6
	{
		firstname: "fred",
		lastname: "jhgcuey",
		mail: "@herg.ieurh", //no exemple in exemple@server.domain
		password: "ejhrg",
        birthDate: "1958-02-15"
	},
    //7
	{
		firstname: "fred",
		lastname: "jhgcuey",
		mail: "gcyeherg.ieurh", //no @ in exemple@server.domain
		password: "ejhrg",
        birthDate: "1958-02-15"
	},
    //8
	{
		firstname: "fred",
		lastname: "jhgcuey",
		mail: "gcye@.ieurh", //no server in exemple@server.domain
		password: "ejhrg",
        birthDate: "1958-02-15"
	},
    //9
    {
		firstname: "fred",
		lastname: "jhgcuey",
		mail: "gcye@hergieurh", //no . in exemple@server.domain
		password: "ejhrg",
        birthDate: "1958-02-15"
	},
    //10
	{
		firstname: "fred",
		lastname: "jhgcuey",
		mail: "gcye@herg.", //no domain in exemple@server.domain
		password: "ejhrg",
        birthDate: "1958-02-15"
	},
    //Password too short 11
	{
		firstname: "fred",
		lastname: "jhgcuey",
		mail: "gcye@herg.",
		password: "ejekk", //-8 chars
        birthDate: "1958-02-15"
	},
    //Password too long 12
	{
		firstname: "fred",
		lastname: "jhgcuey",
		mail: "gcye@herg.",
		password: "ejhrgejhrgejhrgejhrgejhrgejhrgejhrgejhrgejhrgejhrgejhrgejhrg", //+40 chars
        birthDate: "1958-02-15"
	},
    //without Password 13
	{
		firstname: "fred",
		lastname: "jhgcuey",
		mail: "gcye@herg.",
		password: "",
        birthDate: "1958-02-15"
	},
    //Too young 14
	{
		firstname: "fred",
		lastname: "jhgcuey",
		mail: "gcye@herg.",
		password: "",
        birthDate: "2020-02-15"
	},
    //Invalid birth date 15
	{
		firstname: "fred",
		lastname: "jhgcuey",
		mail: "gcye@herg.",
		password: "",
        birthDate: "birthdate"
	}
]