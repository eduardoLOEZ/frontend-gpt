import React from 'react';
import {
    Document,
    Page,
    Text,
    Image,
    StyleSheet,
    View
} from "@react-pdf/renderer";

const PDF = ({ userInfo, responseHistory }) => {
    const pageWidth = 595.276; // Ancho de la página por defecto (A4)

    const centerHorizontal = (contentWidth) => (pageWidth - contentWidth) / 2;

    return (
        <Document>
            {/* Página 1: Portada */}
            <Page style={styles.page}>
                <View style={[styles.container, { flexDirection: 'column' }]}>
                    <Text style={styles.title}>UNIVERSIDAD INTERAMERICANA PARA EL DESARROLLO</Text>
                    <View style={styles.userData}>
                        <Text>Nombre: {userInfo.name}</Text>
                        <Text>ID: {userInfo.id}</Text>
                        <Text>Materia: {userInfo.subject}</Text>
                        <Text>Carrera: {userInfo.career}</Text>
                        <Text>Cuatrimestre: {userInfo.semester}</Text>
                    </View>
                    {userInfo.imageUrl && (
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo} src={userInfo.imageUrl} />
                    </View>
                    )}
                </View>
            </Page>

            {/* Página de la respuesta */}
            <Page style={styles.page}>
                <View style={styles.response}>
                    <Text style={styles.title}>Response del Historial</Text>
                    <Text>Response: {responseHistory}</Text>
                </View>
            </Page>
        </Document>
    );
};

const styles = StyleSheet.create({
    page: {
        padding: 40,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    userData: {
        marginBottom: 10,
        fontSize: 16,
    },
    response: {
        marginTop: 20,
    },
    title: {
        fontSize: 16,
        marginBottom: 9,
    },
    logoContainer: {
        marginTop: 20,
    },
    logo: {
        width: 200,
        height: 200,
    }
});

export default PDF;
