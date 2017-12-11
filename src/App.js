import React, { Component } from 'react';
import './App.css';

import VerbList from './VerbList/VerbList';
import AddVerb from './AddVerb/AddVerb';
import Card from './Card/Card';
import Footer from './Footer/Footer';

class App extends Component {
  state = {
    verbs: [
      { verb: 'hablar', translation: 'to speak', userInput: '' },
      { verb: 'ver', translation: 'to see', userInput: '' },
      { verb: 'tener', translation: 'to have', userInput: '' },
      { verb: 'querer', translation: 'to want', userInput: '' },
      { verb: 'ser', translation: 'to be', userInput: '' },
      { verb: 'estar', translation: 'to be', userInput: '' },
      { verb: 'hacer', translation: 'to do', userInput: '' },
      { verb: 'decir', translation: 'to say', userInput: '' },
      { verb: 'ir', translation: 'to go', userInput: '' },
      { verb: 'dar', translation: 'to give', userInput: '' },
      { verb: 'llegar', translation: 'to arrive', userInput: '' },
      { verb: 'encontrar', translation: 'to find', userInput: '' },
    ],
    newSpanishVerb: '',
    newEnglishVerb: '',
    valid: true
  }

  /**
   * Update new verbs with input values
   * @param {string} event - the event from the input fields
   */
  updateVerb(event) {
    const verb = event.target.value;
    event.target.id === 'spa' ?
      this.setState({ newSpanishVerb: verb }) :
      this.setState({ newEnglishVerb: verb });
  }

  /**
   * Add verb to list of verbs
   */
  addVerb() {
    if (this.checkIfVerbExist()) {
      const validation = false;
      this.setState({ valid: validation });
      return;
    }
    // Check for empty input fields
    if (this.state.newEnglishVerb.trim() === '' || this.state.newSpanishVerb.trim() === '') {
      const validation = false;
      this.setState({ valid: validation });
      return;
    }

    const verbs = [...this.state.verbs];
    const obj = {
      verb: this.state.newSpanishVerb,
      translation: this.state.newEnglishVerb,
      userInput: ''
    }
    verbs.push(obj);
    this.setState({
      verbs: verbs,
      newSpanishVerb: '',
      newEnglishVerb: '',
      valid: true
    });
  }

  checkIfVerbExist() {
    for (let i = 0; i < this.state.verbs.length; i++) {
      if (this.state.verbs[i].verb === this.state.newSpanishVerb.toLocaleLowerCase().trim()) {
        console.log('verb already exist');
        return true;
      }
    }
  }

  /**
   * Get user input and set state for targeted card
   * @param {string} event - the event from user input
   * @param {string} passedInVerb - the verb of the card
   */
  cardInput(event, passedInVerb) {
    const verbIndex = this.state.verbs.findIndex(v => v.verb === passedInVerb);
    const verb = { ...this.state.verbs[verbIndex] };
    verb.userInput = event.target.value;

    const verbs = [...this.state.verbs];
    verbs[verbIndex] = verb;
    this.setState({ verbs: verbs });
  }

  checkStatus(verb) {
    return verb.translation === verb.userInput;
  }

  render() {
    const verbs = this.state.verbs;
    const cards = verbs.map(v =>
      <Card
        status={this.checkStatus(v)}
        userInput={v.userInput}
        changed={(event) => this.cardInput(event, v.verb)}
        key={v.verb}
        verb={v.verb} />
    );
    return (
      <div className="App">
        <div className="jumbotron">
          <h3 className="display-4">Spanish Verb List</h3>
          <p className="lead">
            <a href="https://github.com/xmtrinidad/ReactVerbList/blob/master/README.md"><i class="fas fa-book"></i> Readme</a> | <a href="https://github.com/xmtrinidad"><i class="fab fa-github"></i> Github</a>
          </p>
        </div>
        <div className="container">
          <div>
            <h2><i class="fas fa-list-ul"></i> Verb List</h2>
            <p className="lead">Review the verb list below or add words to the list!</p>
          </div>
          <div className="top">
            <AddVerb
              validation={this.state.valid}
              spa={this.state.newSpanishVerb}
              eng={this.state.newEnglishVerb}
              changed={(event) => this.updateVerb(event)}
              add={() => this.addVerb()} />
            <VerbList verbs={this.state.verbs} />
          </div>
          <hr />
          <div>
            <h2><i class="fas fa-clipboard"></i> Verb Quiz</h2>
            <p className="lead">Enter English translations and test your knowledge of these verbs!</p>
          </div>
          <div className="cards">
            {cards}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
