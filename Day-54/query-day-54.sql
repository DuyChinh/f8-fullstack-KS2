--Query
--EXE1
SELECT 
  dp.MaDatPhong, 
  r.id AS MaPhong, 
  r.category AS LoaiPhong, 
  r.price AS GiaPhong, 
  c.name AS TenKH, 
  dp.order_date AS NgayDat, 
  COALESCE(SUM(s.price * sd.quantity), 0) AS TongTienSuDungDichVu, 
  (r.price + COALESCE(SUM(s.price * sd.quantity), 0)) AS TongTienHat, 
  (r.price + COALESCE(SUM(s.price * sd.quantity), 0) - dp.deposits) AS TongTienThanhToan
FROM book_rooms dp
JOIN rooms r ON dp.id_room = r.id
JOIN customers c ON dp.id_customer = c.id
LEFT JOIN service_detail sd ON dp.id = sd.id_room
LEFT JOIN services s ON sd.id_service = s.id
GROUP BY dp.MaDatPhong, r.id, r.category, r.price, c.name, dp.order_date, dp.deposits;

--EXE2
SELECT 
  c.id AS MaKH, 
  c.name AS TenKH, 
  c.address AS DiaChi, 
  c.phone AS SoDT
FROM customers c
JOIN book_rooms br ON c.id = br.id_customer
JOIN rooms r ON br.id_room = r.id
WHERE r.category = 'Karaoke' AND c.address LIKE '%Hoa Xuan%';

--EXE3
SELECT 
  r.id AS MaPhong, 
  r.category AS LoaiPhong, 
  r.max_guests AS SoKhachToiDa, 
  r.price AS GiaPhong, 
  COUNT(*) AS SoLanDat
FROM rooms r
JOIN book_rooms br ON r.id = br.id_room
WHERE br.status = 'Da dat'
GROUP BY r.id, r.category, r.max_guests, r.price
HAVING COUNT(*) > 2;