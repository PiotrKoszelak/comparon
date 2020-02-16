def getMessageUserPL(userOffer):

    return  f'''
            <h4>Twoje zamówienie zostało przyjęte do realizacji. Niedługo skontaktujemy się z Tobą w sprawie zamównienia.<h4>
            <p>Szczegóły zamówienia:<p>
            <table style="text-align: left; width: 300px;">
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;" >Operator</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">{userOffer["operator"]}</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">Cena</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">{userOffer["price"]} zł</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">Okres trwania umowy</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">{userOffer["period"]} ms</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">Prędkość</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">{userOffer["speed"]} MB/s</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">Typ</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">{userOffer["type"]}</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">Czas dostarczenia</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">{userOffer["deliveryTime"]} h</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">Koszt dostarczenia</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">{userOffer["deliveryCost"]} zł</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">Urządzenie</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">{userOffer["equipment"]}</td>
                </tr>
            </table>
            '''

def getMessageUserEN(userOffer):

    return  f'''
            <h4>Your order has been accepted. We will contact you shortly regarding ordering.<h4>
            <p>Offer details:<p>
            <table style="text-align: left; width: 300px;">
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;" >Operator</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">{userOffer["operator"]}</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">Price</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">{userOffer["price"]} zl</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">Period of time</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">{userOffer["period"]} ms</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">Speed</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">{userOffer["speed"]} MB/s</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">Type</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">{userOffer["type"]}</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">Delivery time</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">{userOffer["deliveryTime"]} h</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">Delivery cost</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">{userOffer["deliveryCost"]} zł</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">Equipment</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">{userOffer["equipment"]}</td>
                </tr>
            </table>
            '''
    
def getMessageContact(comment):
     return f'<h4>Komentarz: {comment}</h4>'

def getMessageAdmin(userOffer, userData, comment, language):
     return f'''<h4>Pojawiło się nowe zamówienie.<h4>
                <p>Szczegóły zamówienia:<p>
                <table style="text-align: left; width: 300px;">
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 8px;" >Id oferty</td>
                        <td style="border: 1px solid #ddd; padding: 8px;">{userOffer["id"]}</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 8px;">Imię</td>
                        <td style="border: 1px solid #ddd; padding: 8px;">{userData["name"]}</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 8px;">Nazwisko</td>
                        <td style="border: 1px solid #ddd; padding: 8px;">{userData["lastname"]}</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 8px;">Telefon</td>
                        <td style="border: 1px solid #ddd; padding: 8px;">{userData["phone"]}</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 8px;">Adres</td>
                        <td style="border: 1px solid #ddd; padding: 8px;">{userData["address"]}</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 8px;">Komentarz</td>
                        <td style="border: 1px solid #ddd; padding: 8px;">{comment}</td>
                    </tr>
                </table>
                '''