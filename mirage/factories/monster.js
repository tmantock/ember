import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
    name(i) { 
        return 'Jane Bourne' + i;
    },
    className: "hide"
});
