type SignUpFormData = {
  username: string;
  password: string;
  confirmPassword: string;
  avatarUrl: string;
};

type LoginFormData = {
  username: string;
  password: string;
};

const validateSignUpForm = (formData: SignUpFormData) => {
  const response = {
    message: "",
    status: true,
  };

  // Check if username is present
  if (!formData.username.trim()) {
    response.message = "Username is required";
    response.status = false;
    return response;
  }

  // Check if password is present and meets criteria
  if (!formData.password.trim()) {
    response.message = "Password is required";
    response.status = false;
    return response;
  } else if (formData.password.trim().length < 6) {
    response.message = "Password must be at least 6 characters long";
    response.status = false;
    return response;
  }

  // Check if confirmPassword matches password
  if (formData.password !== formData.confirmPassword) {
    response.message = "Passwords must match";
    response.status = false;
    return response;
  }

  // Check if avatarUrl is a valid URL (optional)
  if (!formData.avatarUrl) {
    response.message = "Please select your avatar";
    response.status = false;
    return response;
  }
  return response;
};

const validateLoginForm = (formData: LoginFormData) => {
  const response = {
    message: "",
    status: true,
  };

  // Check if username is present
  if (!formData.username.trim()) {
    response.message = "Username is required";
    response.status = false;
    return response;
  }

  // Check if password is present and meets criteria
  if (!formData.password.trim()) {
    response.message = "Password is required";
    response.status = false;
    return response;
  }

  return response;
};

export { validateSignUpForm, validateLoginForm };
