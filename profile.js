document.addEventListener("DOMContentLoaded", function () {
  const profileImageInput = document.getElementById("profileImage");
  const previewImage = document.getElementById("previewImage");
  const resendOTPButton = document.getElementById("resendOTP");

  // Preview uploaded image
  profileImageInput.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function () {
        previewImage.src = reader.result;
      };
      reader.readAsDataURL(file);
    }
  });

  // Resend OTP functionality
  resendOTPButton.addEventListener("click", function () {
    // Placeholder function for OTP resend
    alert("OTP resent!");
  });
});
