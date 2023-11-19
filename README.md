### Description

A simple portfolio template for developer/designers built with React. 

### Features

- Fully Responsive
- Multi-Page Layout
- Contact Form With EmailJs
- React-Bootstrap
- Edit Content From One Place
- Add Your Image And Resume To Assets Folder

### Setup

Get the code

<pre>git clone https://github.com/aliakbari76/myResume.git</pre>
 
Install required dependencies

<pre>yarn install</pre>


Start the server

<pre>yarn start</pre>

### More

- Modify pages content in  `src/content_option.js`.

- To add your image in home screen insteed of mine :

    1- add your image `in assets/images/`

    2-Modify the picture in `src/page/home/index.js`. change this line of code and set the name of the picture in string to your picture : 
    ```
        import picture from "../../assets/images/IMG_1961.jpg"
    ```

- To add your resume for dowlnoad insteed of mine:

    1- add your resume in `assets/pdf/`

    2- Modify the pdf in `src/components/downloadLocal/downloadpdf.js`. change this line of code and set the name of the pdf : 
    ```
    import pdffile from "../../assets/pdfs/cv.pdf"
    ```


### Thanks

If you like this portfolio template don't forget give it a ⭐ 
