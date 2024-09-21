# Portfolio

This project is a personal portfolio website built with Next.js, showcasing skills, projects etc.

## Features

-   **Responsive Design**: Optimized for all screen sizes, ensuring a seamless experience across devices.
-   **Dynamic Project Management**: Easily update project content without code changes.
-   **Dark Mode Support**: Built-in dark mode toggle for enhanced user experience.

## Tech Stack

-   **Next.js**: React-based framework for building performant, production-ready web applications.
-   **React**: Component-based library for building the user interface.
-   **TypeScript**: Static type-checking for better code quality.
-   **Tailwind CSS**: Utility-first CSS framework for styling.
-   **Vercel**: Platform for frictionless deployment and hosting.

## Setup and Installation

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/ajittupe2548/ajit-tupe-portfolio
    cd ajit-tupe-portfolio
    ```

2. **Install Dependencies**:

    ```bash
    npm install
    ```

3. **(Optional) Enable User Tracking**:
   If you want to enable user interaction tracking using Google Sheets, follow these steps:

    1. Create a Google Sheet and note the sheet ID. Add columns: `Section`, `Label`, `Action`, `Date`, `Time`, and `IsMobile`.
    2. In the Google Sheet, go to the **Extensions** tab and select **Apps Script**.
    3. Replace the Apps Script code with the snippet below.
    4. In the script, replace `YOUR_SHEET_ID` with the actual sheet ID and save the file.
    5. Click **Deploy** > **New Deployment** > **Select type** > **Web app**.
    6. Set access to "Anyone" and click **Deploy**.
    7. Authorize the Apps Script with your Google account.
    8. Copy the deployment ID after authorization and add it to the `.env.local` file as `SCRIPT_DEPLOYMENT_ID`.
    9. Your tracking setup is complete.

    ```js
    const SHEET_NAME = 'Sheet1';
    const SPREADSHEET_ID = 'YOUR_SHEET_ID';

    function doPost(e) {
        var sheet =
            SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);

        const { section, label, action, date, time, isMobile } = JSON.parse(
            e.postData.contents
        );
        sheet.appendRow([section, label, action, date, time, isMobile]);

        var output = ContentService.createTextOutput(
            JSON.stringify({ status: 'Success' })
        );
        output.setMimeType(ContentService.MimeType.JSON);

        return output;
    }
    ```

4. **Run the Development Server**:

    ```bash
    npm run dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

## Deployment

Deploy the project effortlessly on Vercel by connecting your GitHub repository. Vercel will automatically build and deploy the `main` branch.

## Customization

-   Modify components in `src/components/` to update the layout and design.

## License

This project is licensed under the MIT License.
