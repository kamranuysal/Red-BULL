$("contactForm").on("subit", (e) => {
  e.preventDefault();

  $.ajax({
    url: "mail/contact.php",
    type: "POST",
    data: $(this).serialize(),
    success: () => {
      alert("Message sent successfully!");
      $("#contactForm")[0].reset();
    },

    error: () => {
      alert("Something went wrong. Please try again later.");
    },
  });
});
