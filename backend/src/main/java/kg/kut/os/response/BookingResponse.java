package kg.kut.os.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class BookingResponse {
    private Long id;
    private String guestName;
    private String guestEmail;
    private LocalDate checkInDate;
    private LocalDate checkOutDate;
    private int numOfAdults;
    private int numOfChildren;
    private int totalNumOfGuests;
    private String bookingConfirmationCode;
    private RoomResponse room;

    public BookingResponse(Long id, LocalDate checkInDate, LocalDate checkOutDate,
                           String bookingConfirmationCode) {
        this.bookingConfirmationCode = bookingConfirmationCode;
        this.id = id;
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
    }


}
