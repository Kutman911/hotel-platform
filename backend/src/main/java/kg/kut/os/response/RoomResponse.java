package kg.kut.os.response;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Data
@NoArgsConstructor
public class RoomResponse {

    private Long id;
    private String roomType;
    private String photo;
    private BigDecimal price;
    private boolean isBooked;
    private List<BookingResponse> bookings;

    public RoomResponse(BigDecimal price, String roomType, Long id) {
        this.price = price;
        this.roomType = roomType;
        this.id = id;
    }



    public RoomResponse(Long id, String roomType, BigDecimal price,
                        boolean isBooked, List<BookingResponse> bookingInfo, byte[] photoBytes) {
        this.id = id;
        this.roomType = roomType;
        this.photo = photo;
        this.price = price;
        this.isBooked = isBooked;
        this.bookings = bookings;
    }

}
