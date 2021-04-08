class Me extends React.Component {
    html = `
    <p>I have:</p>
    <p>╠ 2020, Jan - Mar: Certificates @ freeCodeCamp.org,</p>
    <p>║ ╠ in: <a href="https://www.freecodecamp.org/certification/fcc7d8027bd-7ee4-4ec3-816b-87c5087dab3c/responsive-web-design">Responsive Web Design</a>, <a href="https://www.freecodecamp.org/certification/fcc7d8027bd-7ee4-4ec3-816b-87c5087dab3c/javascript-algorithms-and-data-structures">JavaScript Algorithms and Data Structures</a>, <a href="https://www.freecodecamp.org/certification/fcc7d8027bd-7ee4-4ec3-816b-87c5087dab3c/front-end-libraries">Front-End Development</a>,</p>
    <p>║ ╚ using: JavaScript, Bootstrap, jQuery, React, Redux, D3, Ajax.</p>
    <p>║</p>
    <p>╠ 2017, Sep - 2019, Oct: 2 years work experience @ RumbleStrip, Sweden,</p>
    <p>║ ╠ in: Data-Analysis and Machine Learning,</p>
    <p>║ ╠ as: an Algorithm Developer and Software Architect,</p>
    <p>║ ╚ using: Matlab, Python, C, Linux and Scrum/Agile development.</p>
    <p>║</p>
    <p>╠ 2017, Jan - Jun: Deep Learning Nanodegre @ Udacity.com,</p>
    <p>║ ╠ building: vanilla DNN, CNN, RNN, GAN,</p>
    <p>║ ╠ for: image classification, TV script generation, language translation, </p>
    <p>║ ║          transfer learning, sentiment analysis, embeddings, auto encoders,</p>
    <p>║ ╚  using: TensorFlow, TensorBoard, TFlearn, Jupyter, FloydHub, AWS, Python.</p>
    <p>║</p>
    <p>╠ 2014-2016: 2 years work experience @ Volvo Cars, Sweden,</p>
    <p>║ ╠ in: the DriveMe, Autonomous Driving, project's Sensor Fusion team in Active-Safety,</p>
    <p>║ ╠ as: a Self-Driving Car Engineer,</p>
    <p>║ ╚ using: Matlab, C++, Python, and Scrum/Agile development.</p>
    <p>║</p>
    <p>╠ 2012-2014: Master's degree in Computer Science @ Gothenburg University, Sweden,</p>
    <p>║ ╠ in: Distributed Systems and Networks,</p>
    <p>║ ╠ thesis: Energy Efficient High-Speed Communication in Wireless Networks,</p>
    <p>║ ╠ student project: Carolo Cup, Germany, self-driving miniature cars, team leader,</p>
    <p>║ ╚ research project: smart-meter classification using SVM.</p>
    <p>║</p>
    <p>╠ 2009-2012: 3 years work experience @ Nokia Siemens Networks, Budapest,</p>
    <p>║ ╠ in: the Home Location Register team for GSM and LTE telecommunication systems,</p>
    <p>║ ╠ as: a Software Engineer,</p>
    <p>║ ╚ using: C++, Python, Perl and Scrum/Agile development.</p>
    <p>║</p>
    <p>╠ 2008: ERASMUS Scholarship @ University of Applied Sciences Ravensburg-Weingarten, Germany.</p>
    <p>║</p>
    <p>╚ 2004-2008: Bachelor's degree in Electrical Engineering @ Obuda University, Hungary,</p>
    <p>  ╠ in: Embedded Systems,</p>
    <p>  ╚ thesis: Robot Simulation in OpenGL Environment</p>
    <br>
    <p>I like:</p>
    <p>╠ machine learning,</p>
    <p>╠ free/open software,</p>
    <p>╠ rock climbing,</p>
    <p>╠ slacklining,</p>
    <p>╠ acroyoga,</p>
    <p>╚ running.</p>
    <br>
    <p>Contact:</p>
    <p>╠ <span class="all-select">contact@nagyattila.tech</span>,</p>
    <p>╚ <a href="https://www.linkedin.com/in/attila-nagy-04701066/">LinkedIn</a>.</p>
        `

    render() {
        return React.createElement('div', {id: 'me'},
            React.createElement('div', {dangerouslySetInnerHTML: {__html: this.html}}, null)
        );
    }
}
