const productModel = require('../models/productModel');
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();

chai.use(chaiHttp);
describe('Laptop product', () => {
	// beforeEach((done) => {
	// 	//Before each test we empty the database
	// 	Book.remove({}, (err) => {
	// 		done();
	// 	});
	// });
	/*
	 * Test the /GET route
	 */
	describe('/Get  product', () => {
		it('it should get all the laptops', (done) => {
			chai
				.request(app)
				.get('/api/product/laptop')
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('array');
					res.body.length.should.be.eql(255);
					done();
				});
		});
	});

	describe('/Post  product', () => {
		it('it create product full', (done) => {
			chai
				.request(app)
				.post('/api/product/laptop/add')
				.send({
					sku: 'test',
					name: 'test',
					brand: {
						name: 'test',
						subBrand: 'test',
					},
					detail: {
						processor: 'test',
						os: 'test',
						graphics: 'test',
						display: 'test',
						memory: 'test',
						hardDrive: 'test',
						color: 'test',
						weight: 'test',
						battery: 'test',
						ports: 'test',
					},
					price: 1,
					status: 'test',
					discount: 1,
					warranty: 'asd',
					description: {
						title: 'asd',
						content: 'asd',
					},
				})
				.end((err, res) => {
					res.should.have.status(200);
					//should.equal(res.body._id, 'NOT_FOUND');
					res.body.should.have.property('_id');
					// res.body.should.have.property('infoUser');
					done();
				});
		});

		it('it create empty name product', (done) => {
			chai
				.request(app)
				.post('/api/product/laptop/add')
				.send({
					sku: 'test',
					name: '',
					brand: {
						name: 'test',
						subBrand: 'test',
					},
					detail: {
						processor: 'test',
						os: 'test',
						graphics: 'test',
						display: 'test',
						memory: 'test',
						hardDrive: 'test',
						color: 'test',
						weight: 'test',
						battery: 'test',
						ports: 'test',
					},
					price: 1,
					status: 'test',
					discount: 1,
					warranty: 'asd',
					description: {
						title: 'asd',
						content: 'asd',
					},
				})
				.end((err, res) => {
					res.should.have.status(400);
					res.body.should.not.have.property('_id');
					done();
				});
		});
	});

	describe('/Delete  product', () => {
		it('it delete product', async () => {
			let id_Product = await productModel.find({ sku: 'test' });
			//console.log(id_Product[0]._id);
			chai
				.request(app)
				.delete(`/api/product/laptop/remove/${id_Product[0]._id}`)
				.end((err, res) => {
					res.should.have.status(200);
					should.equal(res.body, 'SUCCESS');
				});
		});
	});

	describe('/Put  product', () => {
		it('it edit name  product', async () => {
			let id_Product = await productModel.find({ sku: 'test' });
			//console.log(id_Product[0]._id);
			chai
				.request(app)
				.put(`/api/product/laptop/edit/${id_Product[0]._id}`)
				.send({ name: 'editTestName' })
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.have.property('_id');
				});
		});

		it('it edit empty name product', async (done) => {
			let id_Product = await productModel.find({ sku: 'test' });
			console.log(id_Product[0]._id);
			chai
				.request(app)
				.put(`/api/product/laptop/edit/${id_Product[0]._id}`)
				.send({ name: '' })
				.end((err, res) => {
					res.should.have.status(400);
					res.body.should.not.have.property('_id');
					done();
				});
		});
	});
});
