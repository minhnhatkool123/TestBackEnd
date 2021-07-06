// const productModel = require('../models/productModel');
// let chai = require('chai');
// let chaiHttp = require('chai-http');
// let app = require('../app');
// let should = chai.should();
// let expect = require('chai').expect;
// const db = require('../db');
// const Account = require('../models/accountModel');

// chai.use(chaiHttp);

// describe('Laptop account', () => {
// 	// beforeEach((done) => {
// 	// 	//Before each test we empty the database
// 	// 	Book.remove({}, (err) => {
// 	// 		done();
// 	// 	});
// 	// });
// 	/*
// 	 * Test the /GET route
// 	 */
// 	describe('/POST account', () => {
// 		it('Login success', (done) => {
// 			chai
// 				.request(app)
// 				.post('/api/account/login')
// 				.send({ username: 'admin', password: '123456' })
// 				.end((err, res) => {
// 					res.should.have.status(200);
// 					should.equal(res.body.result, 'SUCCESS');
// 					res.body.should.have.property('accessToken');
// 					res.body.should.have.property('infoUser');
// 					done();
// 				});
// 		});
// 		it('Login fail', (done) => {
// 			chai
// 				.request(app)
// 				.post('/api/account/login')
// 				.send({ username: 'admin1', password: '123456' })
// 				.end((err, res) => {
// 					res.should.have.status(200);
// 					should.equal(res.body.result, 'NOT_FOUND');
// 					// res.body.should.have.property('accessToken');
// 					// res.body.should.have.property('infoUser');
// 					done();
// 				});
// 		});
// 		it('Register success', (done) => {
// 			chai
// 				.request(app)
// 				.post('/api/account/register')
// 				.send({
// 					username: 'test1',
// 					password: '123456',
// 					email: 'test1@gmail.com',
// 				})
// 				.end((err, res) => {
// 					res.should.have.status(201);
// 					//should.equal(res.body._id, 'NOT_FOUND');
// 					res.body.should.have.property('_id');
// 					// res.body.should.have.property('infoUser');
// 					done();
// 				});
// 		});
// 		it('Register fail with wrong email', (done) => {
// 			chai
// 				.request(app)
// 				.post('/api/account/register')
// 				.send({
// 					username: 'test2',
// 					password: '123456',
// 					email: 'test2',
// 				})
// 				.end((err, res) => {
// 					res.should.have.status(400);
// 					//should.equal(res.body._id, 'NOT_FOUND');
// 					res.body.should.not.have.property('_id');
// 					// res.body.should.have.property('infoUser');
// 					done();
// 				});
// 		});
// 		it('Register  fail with short password', (done) => {
// 			chai
// 				.request(app)
// 				.post('/api/account/register')
// 				.send({
// 					username: 'test3',
// 					password: '1',
// 					email: 'test3@gmail.com',
// 				})
// 				.end((err, res) => {
// 					res.should.have.status(400);
// 					//should.equal(res.body._id, 'NOT_FOUND');
// 					res.body.should.not.have.property('_id');
// 					// res.body.should.have.property('infoUser');
// 					done();
// 				});
// 		});
// 		it('Register fail with short username', (done) => {
// 			chai
// 				.request(app)
// 				.post('/api/account/register')
// 				.send({
// 					username: 'test',
// 					password: '123456',
// 					email: 'test@gmail.com',
// 				})
// 				.end((err, res) => {
// 					res.should.have.status(400);
// 					//should.equal(res.body._id, 'NOT_FOUND');
// 					res.body.should.not.have.property('_id');
// 					// res.body.should.have.property('infoUser');
// 					done();
// 				});
// 		});
// 		it('Register fail with same username', (done) => {
// 			chai
// 				.request(app)
// 				.post('/api/account/register')
// 				.send({
// 					username: 'test',
// 					password: '123456',
// 					email: 'test@gmail.com',
// 				})
// 				.end((err, res) => {
// 					res.should.have.status(400);
// 					//should.equal(res.body._id, 'NOT_FOUND');
// 					res.body.should.not.have.property('_id');
// 					// res.body.should.have.property('infoUser');
// 					done();
// 				});
// 		});
// 	});

// 	describe('/DELETE account', () => {
// 		it('delete account', async () => {
// 			let id_User = await Account.find({ username: 'test' });
// 			console.log(id_User[0]._id);
// 			chai
// 				.request(app)
// 				.delete(`/api/account/remove/${id_User[0]._id}`)
// 				.end((err, res) => {
// 					//res.should.have.status(400);

// 					should.equal(res.body, 'SUCCESS');
// 					//res.body.should.not.have.property('_id');
// 					// res.body.should.have.property('infoUser');

// 					//done();
// 				});
// 		});
// 	});
// });
