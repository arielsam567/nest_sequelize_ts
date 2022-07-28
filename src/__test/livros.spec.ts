/* eslint-disable prettier/prettier */
import fetch from 'node-fetch';

describe('Livros test', () => {
  let responseGETALL;

  let responseCREATE;
  let bodyCreate;

  let respondeGETbyID: Response;
  let bodyGetById;

  let respondeDELETE: Response;
  let userIdToDelet;

  let responseUPDATE: Response;

  beforeEach(async () => {

    //SAVE
    responseCREATE = await fetch('http://localhost:3000/livros', {
      method: 'POST',
      body: JSON.stringify({
        codigo: 'ARIEL',
        nome: 'SAM',
        preco: 29.3,
      }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    bodyCreate = await responseCREATE.json();
    userIdToDelet = bodyCreate['id'];

    //GET ALL
    responseGETALL = await fetch('http://localhost:3000/livros', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    //GET BY ID
    const urlGETlivro = 'http://localhost:3000/livros/' + userIdToDelet;
    respondeGETbyID = await fetch(urlGETlivro, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    //UPDATE
    responseUPDATE = await fetch('http://localhost:3000/livros', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: userIdToDelet,
        codigo: 'ARIEL',
        nome: 'SAM',
        preco: 39.3,
      }),
    });

    //DELETE
    const url = 'http://localhost:3000/livros/' + userIdToDelet;
    respondeDELETE = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    bodyGetById = await respondeGETbyID.json();    


  });






  describe('GET ALL', () => {
    it('should return list of livros', () => {
      expect(responseGETALL.status).toBe(200);
    });
  });

  describe('INSERT', () => {
    it('should save livro', () => {
      expect(responseCREATE.status).toBe(201);
      expect(typeof bodyCreate['id']).toBe('number');
      expect(typeof bodyCreate['codigo']).toBe('string');
      expect(typeof bodyCreate['nome']).toBe('string');
      expect(bodyCreate['codigo']).toBe('ARIEL');
      expect(bodyCreate['nome']).toBe('SAM');
      expect(typeof bodyCreate['preco']).toBe('number');
    });
  });

  describe('GET BY ID', () => {
    it('should get livro', () => {
      expect(respondeGETbyID.status).toBe(200);
      expect(bodyGetById['id']).toBe(userIdToDelet);
      expect(typeof bodyGetById['id']).toBe('number');
      expect(typeof bodyGetById['codigo']).toBe('string');
      expect(typeof bodyGetById['nome']).toBe('string');
      expect(typeof bodyGetById['preco']).toBe('number');
      expect(bodyGetById['preco']).toBe(29.3);
    });
  });

  describe('UPDATE', () => {
    it('should UPDATE livro', () => {
      expect(responseUPDATE.status).toBe(202);
    });
  });

  describe('DELETE', () => {
    it('should DELETE livro', () => {
      expect(respondeDELETE.status).toBe(200);
    });
  });


});
