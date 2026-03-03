package kg.kut.os.service;

import kg.kut.os.model.Room;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigDecimal;
import java.sql.SQLException;
import java.util.List;

public interface IRoomService {
    Room addNewRoom(MultipartFile photo, String roomType, BigDecimal price) throws IOException, SQLException;

    List<String> getAllRoomTypes();

    List<Room> getAllRooms();

    byte[] getRoomPhotoById(long id) throws SQLException;
}
