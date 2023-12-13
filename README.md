# Google Slides Translation Script

This Google Apps Script allows you to translate text within a Google Slides presentation from `Initial` to `target` language.

## Description

This script utilizes Google Apps Script to access a Google Slides presentation and translate the text content of each slide from Chinese to English.

## Prerequisites

- **Google Slides Presentation ID:** Replace `'YOUR_PRESENTATION_ID_HERE'` in the script with the ID of your Google Slides presentation.
- **Google Translate API:** Ensure the Google Translate API is enabled in your Google Cloud Platform project.
- **Google Apps Script Editor:** Access to Google Apps Script within Google Slides to paste and execute the provided script.

## Usage

1. Open your Google Slides presentation.
2. Access the Google Apps Script editor via `Extensions` > `Apps Script`.
3. Paste the provided script into the editor.
4. Replace `'YOUR_PRESENTATION_ID_HERE'` with the actual ID of your presentation.
5. Save the script and run the `translateSlides()` function.

## Important Note

- The script translates text within shapes in each slide from Chinese to English. It's crucial to review the translations as machine translations might not always be accurate.
- Ensure appropriate permissions for accessing and modifying the slides are granted.

## Limitations

- This script focuses on translating text within shapes in slides. Other elements or embedded content won't be translated using this script.

## License

This script is provided under the [MIT License](https://opensource.org/licenses/MIT).
