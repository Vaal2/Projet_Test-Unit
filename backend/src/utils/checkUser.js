export const calculateAge = (dob) => {
	if (typeof(dob) === "string"){
		return 0;
	}
	else{
		const diff_ms = Date.now() - dob.getTime();
		const age_dt = new Date(diff_ms); 
	
		return Math.abs(age_dt.getUTCFullYear() - 1970);
	}
}

export const isValidUsers = (user) => {
	try {
		const reMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		const isMailValid = reMail.test(String(user.mail).toLowerCase());

		const reNomPrenom = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
		const isNomValide = user.nom.length > 0 && reNomPrenom.test(String(user.nom));
		const isPrenomValide = user.prenom.length > 0 && reNomPrenom.test(String(user.prenom));
		const isPsswdValide = user.password.length >= 8 && user.password.length <= 40;

		const isAgeValid = calculateAge(user.birth) > 13;

		console.log(user.mail, isMailValid);
		console.log(user.nom, isNomValide);
		console.log(user.prenom, isPrenomValide);
		console.log(user.birth, isAgeValid);
		console.log(user.password, isPsswdValide);

		return  isMailValid && isNomValide && isPrenomValide && isAgeValid && isPsswdValide;
	} catch {
		console.log('catch');
		return false
	}
}