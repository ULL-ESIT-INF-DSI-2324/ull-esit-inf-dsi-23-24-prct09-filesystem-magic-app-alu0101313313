
import 'mocha';
import { expect } from 'chai';
import { add }  from '../src/basicfunctions.js';


describe( 'tests de basicfunctions', () => {
  it ('probando la funcion add', () => {
    expect(add(1,2)).to.be.equal(3);
  });
});


/*
import 'mocha'
import { expect } from 'chai';
import { Button, ButtonObserver, ButtonClickEventType } from '../src/basicfunctions.js';

describe('Button', () => {
  let myButton;
  let firstButtonObserver;
  let secondButtonObserver;

  beforeEach(() => {
    myButton = new Button(0, 'myButton');
    firstButtonObserver = new ButtonObserver(0, 'firstButtonObserver');
    secondButtonObserver = new ButtonObserver(1, 'secondButtonObserver');
  });

  it('should subscribe observers', () => {
    myButton = new Button(0, 'myButton');
    firstButtonObserver = new ButtonObserver(0, 'firstButtonObserver');
    myButton.subscribe(firstButtonObserver);
    expect(myButton.observers).to.include(firstButtonObserver);
  });

  it('should unsubscribe observers', () => {
    myButton.subscribe(firstButtonObserver);
    myButton.unsubscribe(firstButtonObserver);
    expect(myButton.observers).to.not.include(firstButtonObserver);
  });

  it('should throw error when subscribing already subscribed observer', () => {
    myButton.subscribe(firstButtonObserver);
    expect(() => myButton.subscribe(firstButtonObserver)).to.throw('The observer had already been subscribed');
  });

  it('should throw error when unsubscribing unregistered observer', () => {
    expect(() => myButton.unsubscribe(firstButtonObserver)).to.throw('The observer has not been subscribed');
  });

  it('should notify observers on left click', () => {
    myButton.subscribe(firstButtonObserver);
    myButton.subscribe(secondButtonObserver);
    myButton.onLeftClick();
    expect(firstButtonObserver.getEventType()).to.equal(ButtonClickEventType.LEFTCLICK);
    expect(secondButtonObserver.getEventType()).to.equal(ButtonClickEventType.LEFTCLICK);
  });

  it('should notify observers on right click', () => {
    myButton.subscribe(firstButtonObserver);
    myButton.subscribe(secondButtonObserver);
    myButton.onRightClick();
    expect(firstButtonObserver.getEventType()).to.equal(ButtonClickEventType.RIGHTCLICK);
    expect(secondButtonObserver.getEventType()).to.equal(ButtonClickEventType.RIGHTCLICK);
  });

  it('should notify observers on center click', () => {
    myButton.subscribe(firstButtonObserver);
    myButton.subscribe(secondButtonObserver);
    myButton.onCenterClick();
    expect(firstButtonObserver.getEventType()).to.equal(ButtonClickEventType.CENTERCLICK);
    expect(secondButtonObserver.getEventType()).to.equal(ButtonClickEventType.CENTERCLICK);
  });
});
*/