export const ValidationSignup = (email, password, username) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const passwordRegex = /^(?=.*[A-Z]).{8,}$/;
  
    const validationErrors = {};
  
    if (typeof email !== 'undefined' && !emailRegex.test(email)) {
      validationErrors.email = "Invalid Email Type";
    }
    
    if (typeof password !== 'undefined' && !passwordRegex.test(password)) {
      validationErrors.password =
        "At least one uppercase letter and be at least 8 characters long.";
    }
  
    if (typeof username !== 'undefined' && (!username || username.length < 2)) {
      validationErrors.username = "Username should be at least 2 characters long.";
    }
  
    if (Object.keys(validationErrors).length > 0) {
      return { isValid: false, errors: validationErrors };
    }
  
    return { isValid: true, errors: {} };
  };
  