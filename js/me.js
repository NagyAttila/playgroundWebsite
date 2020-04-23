class Me extends React.Component {
    html = `
    <p>I have:</p>
    <p>╠ 2017, Sep - 2019, Oct: 2 years work experience @ RumbleStrip, Sweden,</p>
    <p>║ ╠ in: Data-Analysis and Machine Learning</p>
    <p>║ ╠ as: an Algorithm Developer and Software Architect,</p>
    <p>║ ╚ using: Matlab, Python, C, Linux and Scrum/Agile development.</p>
    <p>║</p>
    <p>╠ 2017, Jan - Jun: Deep Learning Nanodegre @ Udacity.com,</p>
    <p>║ ╠ building: vanilla DNN, CNN, RNN, GAN,</p>
    <p>║ ╠  for: image classification, TV script generation, language translation, transfer learning, sentiment,</p>
    <p>║ ║          analysis, embeddings, auto encoders,</p>
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
    <p>╚ 2008-2009: ERASMUS Scholarship @ University of Applied Sciences Ravensburg-Weingarten, Germany.</p>
    <br>
    <p>I like:</p>
    <p>╠ machine learning,</p>
    <p>╠ free/open software,</p>
    <p>╠ functional programming,</p>
    <p>╠ rock climbing,</p>
    <p>╠ acroyoga,</p>
    <p>╚ slacklining.</p>
    <br>
    <p>Contact:</p>
    <p>╠ <span class="all-select">contact@nagyattila.tech</span>,</p>
    <p>╚ <a href="https://www.linkedin.com/in/attila-nagy-04701066/">LinkedIn<a>.</p>
        `

    render() {
        return React.createElement('div', {id: 'me'},
                React.createElement('div', {dangerouslySetInnerHTML: {__html: this.html}}, null)
               );
    }
}

