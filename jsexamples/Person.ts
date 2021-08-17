interface Person {
		id: number,
		firstName: string,
		address?:string
}

function addPerson(p:Person): void {
		//
	}

	addPerson({"id": 12, "firstName": "Yanni"}); // valid

	addPerson({"id": 12, "firstName": "Yanni", "address" : "some street"});

	//addPerson({"firstName": "Yanni"}); // error