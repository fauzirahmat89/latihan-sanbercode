const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let products = [
  { id: 1, name: 'laptop', category:'elektronik' },
  { id: 2, name: 'macbok', category:'elektronik' },
  { id: 3, name: 'kulkas', category:'elektronik' },
  { id: 4, name: 'kursi', category:'perabotan' },
  { id: 5, name: 'meja', category:'perabotan' },
  { id: 6, name: 'kemeja', category:'pakaian' },
  { id: 7, name: 'manter', category:'pakaian' }
];

// GET semua produk
app.get('/api/', (req, res) => {
    res.json(products);
  });

// 1. Route GET Mengambil semua kategori produk
app.get('/api/products/category', (req, res) => {
  const productsnocategory = products.map(({id, category})=>({id,category}))
  res.json(productsnocategory);
});

// 2. GET category berdasarkan ID
app.get('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId)
  delete product.name;
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// 3. POST Menambah Kategori Baru ke array
app.post('/api/products', (req, res) => {
    const newProduct = req.body;
    newProduct.id = products.length ? products[products.length - 1].id + 1 : 1;
    
    products.push(newProduct);
    res.status(201).json(newProduct);
  });

// 4. PUT untuk memperbarui kategori berdasarkan ID
app.put('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === productId);
    if (productIndex !== -1) {
        products[productIndex] = { id: productId, ...req.body, category: products[productIndex].category };
        res.json(products[productIndex]);
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    
    res.json(product);
  });

// 5. DELETE kategori berdasarkan ID
app.delete('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    products = products.filter(p => p.id !== productId);
    
    res.status(204).json();
  });

// 6. GET mencari produk berdasarkan nama dengan query string
app.get('/api/products/', (req, res) => {
    const productName = req.query.name;
    const product = products.find(p => p.name === productName)
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  });

// 7. GET mencari produk dalam kategori tertentu dan mencari berdasarkan nama
// menggunakan parameter dan query string
app.get('/api/productsPS/:id/', (req, res) => {
    const productId =parseInt(req.params.id);
    const productName = req.query.name;
    const product = products.find(p => (p.name === productName)&&(p.id === productId) )
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  });

// PUT update produk
app.put('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const productIndex = products.findIndex(p => p.id === productId);
  if (productIndex !== -1) {
    products[productIndex] = { id: productId, ...req.body };
    res.json(products[productIndex]);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});