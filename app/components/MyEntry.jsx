import React from 'react';
import Icon from './Icon.jsx';

export default class MyEntry extends React.Component {
  componentDidMount(){
    this.passInput.focus();
  }
  componentDidUpdate(){
    console.log("reset focus on input field");
    this.passInput.focus();
  }
  render() {
    return (
      <form className="form_pass" onSubmit={this.props.handleSubmit}>
            <div className="input_box">

              <div className="input_case">
                <div className="input_text">
                  <input className="main_input" type={this.props.hide_pass ? 'password':'text'} autoComplete="off" placeholder="Introduce una contraseña para comprobar su fortaleza" value={this.props.value} onChange={this.props.handleInputChange} ref={(input) => { this.passInput = input; }} />

                </div>
                <div className="eye_box">
                  <Icon className={this.props.hide_pass ? "control control_eye":"control control_eye open"}  viewBox="0 0 63.4 40.4" onClick={this.props.handleEyeChange} icon="eye"/>
                </div>
              </div>

              <div className={this.props.game_started ? "check_box" : "check_box hide" }>
                <Icon className="control control_check" viewBox="0 0 45.5 41.7" onClick={this.props.handleSubmit} icon="check"/>
              </div>
            </div>
              <div className="bar_box">
                <ul className="bars">
                  <li className={"bar bar01 " + (this.props.conclussion>=0 ? "fill":"")}></li>
                  <li className={"bar bar02 " + (this.props.conclussion>=0 ? "fill":"")}></li>
                  <li className={"bar bar03 " + (this.props.conclussion>=0 ? "fill":"")}></li>
                  <li className={"bar bar04 " + (this.props.conclussion>=0 ? "fill":"")}></li>
                  <li className={"bar bar05 " + (this.props.conclussion>0 ? "fill":"")}></li>
                  <li className={"bar bar06 " + (this.props.conclussion>0 ? "fill":"")}></li>
                  <li className={"bar bar07 " + (this.props.conclussion>0 ? "fill":"")}></li>
                  <li className={"bar bar08 " + (this.props.conclussion>0 ? "fill":"")}></li>
                  <li className={"bar bar09 " + (this.props.conclussion>1 ? "fill":"")}></li>
                  <li className={"bar bar10 " + (this.props.conclussion>1 ? "fill":"")}></li>
                  <li className={"bar bar11 " + (this.props.conclussion>1 ? "fill":"")}></li>
                  <li className={"bar bar12 " + (this.props.conclussion>1 ? "fill":"")}></li>
                  <li className={"bar bar13 " + (this.props.conclussion>2 ? "fill":"")}></li>
                  <li className={"bar bar14 " + (this.props.conclussion>2 ? "fill":"")}></li>
                  <li className={"bar bar15 " + (this.props.conclussion>2 ? "fill":"")}></li>
                  <li className={"bar bar16 " + (this.props.conclussion>2 ? "fill":"")}></li>
                  <li className={"bar bar17 " + (this.props.conclussion>3 ? "fill":"")}></li>
                  <li className={"bar bar18 " + (this.props.conclussion>3 ? "fill":"")}></li>
                  <li className={"bar bar19 " + (this.props.conclussion>3 ? "fill":"")}></li>
                  <li className={"bar bar20 " + (this.props.conclussion>3 ? "fill":"")}></li>
                </ul>
              </div>

              <div className="character_box">
                <span className={this.props.password ? "type type_char bright":"type type_char"}>{this.props.password && this.props.password.length} caracteres</span>
                <span className={this.props.contains.lowercase? "type type_low bright":"type type_low"}> minúsculas</span>
                <span className={this.props.contains.uppercase? "type type_upp bright":"type type_upp"}> mayúsculas</span>
                <span className={this.props.contains.numbers? "type type_num bright":"type type_num"}> números</span>
                <span className={this.props.contains.special? "type type_sym bright":"type type_sym"}> símbolos</span>
                <span className={this.props.contains.spaces? "type type_spc bright":"type type_spc"}> espacios</span>
              </div>
      </form>
    );
  }
}
