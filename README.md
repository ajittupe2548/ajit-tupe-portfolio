# Portfolio

This project is a personal portfolio website built with Next.js.

## Features

-   Responsive portfolio website showcasing projects and skills
-   Dynamic content management for projects
-   Dark mode support

## Tech Stack

-   Next.js
-   React
-   TypeScript
-   Tailwind CSS
-   Vercel (for deployment)

## Setup and Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/ajittupe2548/ajit-tupe-portfolio
    cd ajit-tupe-portfolio
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Setup environment variables
    1. Create google sheet (Note sheet id) and add heading colums as - Section Label Action Date Time IsMobile.
    2. Click on extensions tab of sheet and selct apps script.
    3. Replace app script code with below snippet.
    4. In below script replace `YOUR_SHEET_ID` with actual sheet id which we have noted above and save file.
    5. Click on Deply button > New deployment > Select type > Web app.
    6. Change who has access to Anyone and click on Deploy.
    7. Then autorize apps script with google account.
    8. After autorization it will show deployment id copy that id and create .env.local file in root folder and update GOOGLE_SHEET_ID
    9. Thats it tracking will be enabled with these steps.

```
const PROD_SHEET_NAME = "Sheet1";
const SPREADSHEET_ID = "YOUR_SHEET_ID";

function doPost(e) {
  var sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(PROD_SHEET_NAME);

  // Parse the JSON request body
  const {section, label, action, date, time, isMobile } = JSON.parse(e.postData.contents);

  sheet.appendRow([section, label, action, date, time, isMobile]);

  var output = ContentService.createTextOutput(JSON.stringify({status: 'Success'}));
  output.setMimeType(ContentService.MimeType.JSON);

  return output;
}
```

4. Run the development server:

    ```bash
    npm run dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment

This project is set up for easy deployment on Vercel. Connect your GitHub repository to Vercel and it will automatically deploy your master branch.

## Customization

-   Modify the components in `src/components/` to change the layout and design of your portfolio
-   Update the `src/app/` directory to add or modify pages

## License

This project is licensed under the MIT License.
