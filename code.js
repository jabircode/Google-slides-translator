function translateSlides() {
  var presentationId = 'your_slides_id_here'; // Replace with your presentation ID
  var presentation = SlidesApp.openById(presentationId);
  var slides = presentation.getSlides();
  var targetLanguage = 'your_target_language'; // Set target language code to 'en' for English

  slides.forEach(function(slide) {
    var shapes = slide.getShapes();
    
    shapes.forEach(function(shape) {
      if (shape.getText() !== undefined && shape.getText().asString() !== '') {
        var originalText = shape.getText().asString();
        var translatedText = LanguageApp.translate(originalText, 'current_slide_language', targetLanguage); // Translate from Chinese ('zh') to English ('en')

        shape.getText().setText(translatedText);
      }
    });
  });
}
