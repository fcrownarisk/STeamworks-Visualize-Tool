
Imports System.Runtime.InteropServices
Public Class RAMSimulator
    Private ramArray As Byte()
    Private Sub New(sizeInBytes As Integer)
        ramArray = New Byte(sizeInBytes + 1) {}
    End Sub
    Protected Function ReadByte(address As Double ) As Byte
        Return ramArray(address)
    End Function
    Default Sub WriteByte(address As String, value As Byte)
        ramArray(address) = value
    End Sub
End Class