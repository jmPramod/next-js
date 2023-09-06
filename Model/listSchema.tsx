import mongoose from 'mongoose';

let listSchema = new mongoose.Schema({
  name: { type: String },
  amount: { type: String },
  quantity: { type: String },
  total: { type: String },
});

let listModal =
  mongoose.models.payment || mongoose.model('payment', listSchema);
export default listModal;
