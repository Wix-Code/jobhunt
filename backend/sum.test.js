import { addRoom } from '../controllers/roomController.js';
import Room from '../model/room.model.js';

jest.mock('../model/room.model.js');

const buildMockRes = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.send = jest.fn();
  return res;
};

describe('addRoom', () => {
  const mockRoomData = {
    name: "Test Room", desc: "Test Desc", price: 100,
    img: "test.jpg", type: "single", userId: "user123"
  };

  afterEach(() => jest.clearAllMocks());

  it('returns 201 on success', async () => {
    const mockSave = jest.fn().mockResolvedValue();
    Room.mockImplementation(() => ({ ...mockRoomData, save: mockSave }));

    const req = { body: mockRoomData };
    const res = buildMockRes();

    await addRoom(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.send).toHaveBeenCalledWith(expect.objectContaining({ success: true }));
  });

  it('returns 500 on failure', async () => {
    const mockSave = jest.fn().mockRejectedValue(new Error('fail'));
    Room.mockImplementation(() => ({ ...mockRoomData, save: mockSave }));

    const req = { body: mockRoomData };
    const res = buildMockRes();

    await addRoom(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith(expect.objectContaining({ success: false }));
  });
});