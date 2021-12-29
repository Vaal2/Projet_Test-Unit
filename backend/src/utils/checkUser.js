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

		const reNomPrenom = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
		const isNomValide = user.lastname.length > 0 && reNomPrenom.test(String(user.lastname));
		const isPrenomValide = user.firstname.length > 0 && reNomPrenom.test(String(user.firstname));
		const isPsswdValide = user.password.length >= 8 && user.password.length <= 40;

		const isAgeValid = calculateAge(user.birthDate) > 13;

		return  isMailValid && isNomValide && isPrenomValide && isAgeValid && isPsswdValide;
	} catch {
		console.log('catch');
		return false
	}
}

export default isValidUsers;