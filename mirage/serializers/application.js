import { RestSerializer } from 'ember-cli-mirage';

export default RestSerializer.extend({
    serialize(response) {
        let json = { monsters: response.models };

        return json;
    }
});
