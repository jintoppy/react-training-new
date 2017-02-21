import chai, {expect} from 'chai';
import {shallow} from 'enzyme';
import React from 'react';
import Header from '../app/components/Header';

import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

describe('<Header />', function(){
    let wrapper;
    beforeEach(function(){
        wrapper = shallow(<Header />);
    });

    it('should render properly', function(){
        expect(wrapper.find('Link')).to.have.length(1);
        
    });

    it('should have className as header', function(){
        expect(wrapper).to.have.className('header');
    });


});