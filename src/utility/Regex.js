export const EmailRegex = RegExp(
	/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
);


export const PhoneRegex = RegExp(/^[0-9]{10,16}$/);

export const StringRegex = RegExp(/^[A-Za-z]+$/);