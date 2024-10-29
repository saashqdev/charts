import * as Charts from './chart';

let saashq     = { };

saashq.NAME    = 'Saashq Charts';
saashq.VERSION = '2.0.0-rc22';

saashq         = Object.assign({ }, saashq, Charts);

export default saashq;